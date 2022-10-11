// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";
import * as cheerio from "cheerio";
import cloudscraper from "cloudscraper";
import { type Urls, type Item, Prisma } from "@prisma/client";

import { getAllItemsAndUrls, addNewPrice } from "../../lib/db";
import { CaptchaError, CloudflareError, ParserError, RequestError, StatusCodeError} from "cloudscraper/errors";

const locations = ["tesco", "dunnes", "supervalu"] as const;
type location = typeof locations[number];

interface ScrapedPrice {
  location: location;
  price: number;
}

async function getHTML(url: string) {
  const res = await cloudscraper({ uri: url, method: "GET" });
  return res;
}

async function getTescoPrice(url: string): Promise<ScrapedPrice> {
  const data = await getHTML(url);
  const $ = cheerio.load(data);
  const priceElement = $(".price-per-sellable-unit .value");
  const p = parseFloat(priceElement.text());
  const price = z.number().parse(p);
  return { location: "tesco", price };
}

async function getDunnesPrice(url: string): Promise<ScrapedPrice> {
  const data = await getHTML(url);
  const $ = cheerio.load(data);
  const priceElement = $("[itemprop=price]")[0].attribs.content;
  const p = parseFloat(priceElement.slice(1));
  const price = z.number().parse(p);
  return { location: "dunnes", price };
}

async function getSuperValuPrice(url: string): Promise<ScrapedPrice> {
  const data = await getHTML(url);
  const $ = cheerio.load(data);
  const priceElement = $(".product-details-price-item");
  const p = parseFloat(priceElement.text().trim().slice(1));
  const price = z.number().parse(p);
  return { location: "supervalu", price };
}

type Scraper = (url: string) => Promise<ScrapedPrice>

type scrapeFunctionObject = {
  [T in location]: Scraper;
};

const scrapeFunctions: scrapeFunctionObject = {
  tesco: getTescoPrice,
  dunnes: getDunnesPrice,
  supervalu: getSuperValuPrice,
};

async function scrapeErrorWrapper({
  scraper,
  name,
  url,
  location
} : {
  scraper: Scraper;
  name: string;
  url: string;
  location: location;
}) : Promise <ScrapedPrice> {
  try {
    const scrapedPrice = await scraper(url)
    return scrapedPrice 
  } catch (e) {
    if (e instanceof ZodError) {
      console.error({
        message: `Error parsing price for ${name}`,
        error: e.errors
      })
   } else if (e instanceof CloudflareError) {
     console.error({
       message: "Cloudflare Error: Internal to cloudflare or multiple challenges",
       item: name,
       url,
       code: e.errorType
     })
   } else if (e instanceof RequestError) {
     console.error({
       message: "RequestError: Error fetching webpage",
       item: name,
       url,
     })
   } else if (e instanceof StatusCodeError) {
     console.error({
       message: "StatusCodeError: Error fetching webpage",
       item: name,
       url,
       statusCode: e.statusCode,
     })
   } else if (e instanceof CaptchaError) {
     console.error({
       message: "CaptchaError: Catpcha found on page",
       item: name,
       url,
     })
   } else if (e instanceof ParserError) {
     console.error({
       message: "ParserError: Unable to parse JS challenge",
       item: name,
       url,
     })
    } else if (e instanceof Error) {
      console.error(e)
      console.error(e.stack)
    } else {
      console.error(e)
    }
    return { location, price: -1 }
  }
}

async function createArrayOfScrapePromises(
  item: Item & { urls: Urls }
): Promise<ScrapedPrice[]> {
  // Initiates the fetching/parsing of all prices being tracked
  let scrapePromises: Promise<ScrapedPrice>[] = [];
  const { urls } = item;

  for (const location of locations) {
    const url = urls[location];
    if (url) {
      let func = scrapeFunctions[location];
      const scrapedPrice = scrapeErrorWrapper({ scraper: func, name: item.name, url, location })
      scrapePromises.push(scrapedPrice);
    }
  }

  const scrapedPricePromises = await Promise.all(scrapePromises);
  return scrapedPricePromises;
}

function createPriceObj(scrapedPrices: ScrapedPrice[], itemId: string) {
  const priceObj: any = {
    itemId,
    dateTime: new Date(),
  };

  for (let scrapedPrice of scrapedPrices) {
    priceObj[scrapedPrice.location] = scrapedPrice.price;
    if (scrapedPrice.price < 0) priceObj[scrapedPrice.location] = null;
  }
  return priceObj;
}

function isPriceObjEmpty(priceObj: Prisma.PriceRecordCreateInput) {
  for (const location of locations) {
    if (priceObj[location]) return false
  }
  return true
}

export async function scrapePricesAndAddToDB() {
  const items = await getAllItemsAndUrls();
  await Promise.all(
    items.map(async (item) => {
      const scrapedPrices = await createArrayOfScrapePromises(item);
      const priceObj = createPriceObj(scrapedPrices, item.id);
      if (isPriceObjEmpty(priceObj)) return     
      addNewPrice(priceObj);
    })
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle differnt methods
  if (req.method !== "POST") {
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.status(405).json({
      message: "Error",
      error: `HTTP method ${req.method} is not permitted`,
    });
    return;
  }

  const { authorization } = req.headers;
  if (authorization !== `Bearer ${process.env.SCRAPEKEY_SECRET}`) {
    res.status(403).json({
      message: "Error",
      error: `Authorzation key unavailable`,
    });
    return;
  }

  console.log(`Scraping prices`);
  await scrapePricesAndAddToDB();
  res.status(200).json({ message: "Success" });
}

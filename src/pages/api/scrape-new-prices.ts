// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import * as cheerio from "cheerio";
import axios from "axios";
import { type PriceRecord, type Urls, type Item, Prisma } from "@prisma/client";

import { getAllItemsAndUrls, addNewPrice } from "../../lib/db";

// type Data = {
//   name: string
// }

const locations = ["tesco", "dunnes", "supervalu"] as const;
type location = typeof locations[number];

interface ScrapedPrice {
  location: location;
  price: number;
}

async function getHTML(url: string) {
  const res = await axios.get(url);
  if (res.status >= 400)
    throw new Error(`Fetching webpage returned status ${res.status}`);
  return res.data;
}

function validatePrice(p: unknown): number {
  return z.number().parse(p);
}

async function getTescoPrice(url: string, name: string): Promise<ScrapedPrice> {
  try {
    const data = await getHTML(url);
    const $ = cheerio.load(data);
    const priceElement = $(".price-per-sellable-unit .value");
    const p = parseFloat(priceElement.text());
    const price = validatePrice(p);
    return { location: "tesco", price };
  } catch (e) {
    console.error({
      message: `Error fetching price for ${name}`,
      error: e,
    });
    return { location: "tesco", price: -1 };
  }
}

async function getDunnesPrice(
  url: string,
  name: string
): Promise<ScrapedPrice> {
  try {
    const data = await getHTML(url);
    const $ = cheerio.load(data);
    const priceElement = $("[itemprop=price]")[0].attribs.content;
    const p = parseFloat(priceElement.slice(1));
    const price = validatePrice(p);
    return { location: "dunnes", price };
  } catch (e) {
    console.error({
      message: `Error fetching price for ${name}`,
      error: e,
    });
    return { location: "dunnes", price: -1 };
  }
}

async function getSuperValuPrice(
  url: string,
  name: string
): Promise<ScrapedPrice> {
  try {
    const data = await getHTML(url);
    const $ = cheerio.load(data);
    const priceElement = $(".product-details-price-item");
    const p = parseFloat(priceElement.text().trim().slice(1));
    const price = validatePrice(p);
    return { location: "supervalu", price };
  } catch (e) {
    console.error({
      message: `Error fetching price for ${name}`,
      error: e,
    });
    return { location: "supervalu", price: -1 };
  }
}

type scrapeFunctionObject = {
  [T in location]: (url: string, name: string) => Promise<ScrapedPrice>;
};

const scrapeFunctions: scrapeFunctionObject = {
  tesco: getTescoPrice,
  dunnes: getDunnesPrice,
  supervalu: getSuperValuPrice,
};

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
      scrapePromises.push(func(url, item.name));
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

export async function scrapePricesAndAddToDB() {
  const items = await getAllItemsAndUrls();
  await Promise.all(
    items.map(async (item) => {
      const scrapedPrices = await createArrayOfScrapePromises(item);
      const priceObj = createPriceObj(scrapedPrices, item.id);
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

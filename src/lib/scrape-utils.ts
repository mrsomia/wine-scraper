import axios from "axios";
import * as cheerio from "cheerio";
import { z } from 'zod'
import { addNewPrice, getAllItemsAndUrls } from "./dao.js";
import { Item, PriceRecord, Urls } from "@prisma/client";

export async function getHTML(url:string) {
  const {data} = await axios.get(url)
  return data
}

type location = "tesco" | "dunnes" | "supervalu"
interface ScrapedPrice {
  location: location,
  price: number
}

function validatePrice(p:unknown): number {
  const validatedPrice = z.number().safeParse(p)
  return validatedPrice.success ? validatedPrice.data : -1
}

export async function getTescoPrice(url:string): Promise<ScrapedPrice> {
  try {
    const data = await getHTML(url)
    const $ = cheerio.load(data)
    const priceElement = $(".price-per-sellable-unit .value")
    const p = parseFloat(priceElement.text())
    const price = validatePrice(p)
    return { location : "tesco", price }
  } catch {
    return  { location : "tesco", price: -1 }
  }
}

export async function getDunnesPrice(url:string): Promise<ScrapedPrice> {
  try {
    const data = await getHTML(url)
    const $ = cheerio.load(data)
    const priceElement = $("[itemprop=price]")[0].attribs.content
    const p = parseFloat(priceElement.slice(1))
    const price = validatePrice(p)
    return { location : "dunnes", price }
  } catch {
    return { location : "dunnes", price: -1 }
  }
}

export async function getSuperValuPrice(url: string): Promise<ScrapedPrice> {
  try {
    const data = await getHTML(url)
    const $ = cheerio.load(data)
    const priceElement = $(".product-details-price-item")
    const p = parseFloat(priceElement.text().trim().slice(1))
    const price = validatePrice (p)
    return {location: "supervalu", price}
  } catch {
    return { location: "supervalu", price: -1 }
  }
}

const scrapeFunctions = {
  tesco: getTescoPrice,
  dunnes: getDunnesPrice,
  supervalu: getSuperValuPrice
}

async function createArrayOfScrapePromises(item: (Item & {urls: Urls})  ): Promise<PromiseSettledResult<ScrapedPrice>[]> {
  let scrapePromises: Promise<ScrapedPrice>[] = [];

  for (let itemurl of Object.entries(item.urls)) {
    let [prop, url] = itemurl
    if (prop === "tesco" || prop === "dunnes" || prop === "supervalu" ) {
      let func = scrapeFunctions[prop]
      if (typeof url === 'string') scrapePromises.push(func(url))
    }
  }
  const scrapedPricePromises = await Promise.allSettled(scrapePromises)
  return scrapedPricePromises
}

function createPriceObj(scrapedPricePromises: PromiseSettledResult<ScrapedPrice>[]) {
  const priceObj: Partial<PriceRecord> = {
    dateTime: new Date(),
  }

  for (let scrapedPricePromise of scrapedPricePromises) {
    if (scrapedPricePromise.status === 'rejected') continue
    if (!scrapedPricePromise.value) continue
    if (scrapedPricePromise.value.price < 0) priceObj[scrapedPricePromise.value.location] = null 
    priceObj[scrapedPricePromise.value.location] = scrapedPricePromise.value.price
  }
  return priceObj
}

function isNewPriceRecord(priceObj: any): priceObj is Omit<PriceRecord, "id"> {
  // Does not check type correctly, just that the one of the locations is present and not all
  // Prisma type has all location with optionals as null (from the DB)
  return ('dateTime' in priceObj && 
  ('supervalu' in priceObj || 
  'tesco' in priceObj || 
  'dunnes' in priceObj )&& 
  'itemId' in priceObj)
}

export async function scrapePricesAndAddToDB() {
  const items = await getAllItemsAndUrls()
  await Promise.all(items.map(async item => {
    const scrapedPricePromises = await createArrayOfScrapePromises(item)
    const priceObj = createPriceObj(scrapedPricePromises)
    priceObj.itemId = item.id
    if(isNewPriceRecord(priceObj)) {
      console.log("adding", {priceObj})
      addNewPrice(priceObj) 
    }
  }))
}

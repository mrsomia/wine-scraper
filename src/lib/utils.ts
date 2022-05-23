import axios from "axios";
import * as cheerio from "cheerio";
import { z } from 'zod'
import { Low } from "lowdb/lib";
import { Data, RecordedPrice } from "./db";


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

export async function scrapePrices(db: Low<Data>) {
  const items = db.data?.items ?? []
  for (let item of items) {
    let scrapePromises: Promise<ScrapedPrice>[] = [];

    for (let itemurl of Object.entries(item.URLs)) {
      let [prop, url] = itemurl
      console.log(itemurl)
      if (prop === "tesco" || prop === "dunnes" || prop === "supervalu" ) {
        let func = scrapeFunctions[prop]
        scrapePromises.push(func(url))
      }
    }

    const scrapedPricePromises = await Promise.allSettled(scrapePromises)
    const priceObj: RecordedPrice = {
      date: Date.now(),
      prices: {}
    }

    for (let scrapedPricePromise of scrapedPricePromises) {
      if (scrapedPricePromise.status === 'rejected') continue
      if (!scrapedPricePromise.value) continue
      if (scrapedPricePromise.value.price < 0) continue
      priceObj.prices[scrapedPricePromise.value.location] = scrapedPricePromise.value.price
    }
    
    item.recordedPrices.push(priceObj)
    db.write()
  }
}

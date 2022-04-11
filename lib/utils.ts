import axios from "axios";
import * as cheerio from "cheerio";
import { Low } from "lowdb/lib";
import { Data } from "./db";

export async function getHTML(url:string) {
  const {data} = await axios.get(url)
  return data
}

export async function getTescoPrice(url:string): Promise<Number> {
  const data = await getHTML(url)
  const $ = cheerio.load(data)
  const price = $(".price-per-sellable-unit .value")
  return parseFloat(price.text())
}

export async function getDunnesPrice(url:string): Promise<Number> {
  const data = await getHTML(url)
  const $ = cheerio.load(data)
  const price = $("[itemprop=price]")[0].attribs.content
  return parseFloat(price.slice(1))
}

export async function getSuperValuPrice(url:string | undefined): Promise<Number | undefined> {
  if (!url) return
  const data = await getHTML(url)
  const $ = cheerio.load(data)
  const price = $(".product-details-price-item")
  return parseFloat(price.text().trim().slice(1))
}

export async function scrapePrices(db: Low<Data>) {
  const items = db.data?.items ?? []
  for (let item of items) {
    let tPromise, dPromise, sPromise;

    for (let prop in item.URLs) {
      switch (prop) {
        case 'tesco':
          tPromise = getTescoPrice(item.URLs[prop])
          break
        case 'dunnes':
          dPromise = getDunnesPrice(item.URLs[prop])
          break
        case 'supervalu':
          sPromise = getSuperValuPrice(item.URLs[prop])
          break
        default:
          break
      }
    }
    const [tPrice, dPrice, sPrice] = await Promise.all([tPromise, dPromise, sPromise])
    const priceObj = {
      date: Date.now(),
      prices: {
        tesco: tPrice,
        dunnes: dPrice,
        supervalu: sPrice
      }
    }
    item.recordedPrices.push(priceObj)
    db.write()
  }
}

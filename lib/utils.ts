import axios from "axios";
import * as cheerio from "cheerio";

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

export async function getSuperValuPrice(url:string): Promise<Number> {
  const data = await getHTML(url)
  const $ = cheerio.load(data)
  const price = $(".product-details-price-item")
  return parseFloat(price.text().trim().slice(1))
}
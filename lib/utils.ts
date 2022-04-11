import axios from "axios";
import * as cheerio from "cheerio";

export async function getHTML(url:string) {
  const {data} = await axios.get(url)
  return data
}

export async function getTescoWine(url:string) {
  const data = await getHTML(url)
  const $ = cheerio.load(data)
  const price = $(".price-per-sellable-unit .value")
  return price.text()
}
 

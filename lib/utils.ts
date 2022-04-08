import axios from "axios";
import * as cheerio from "cheerio";

async function getHTML() {
  let {data} = await axios.get("https://www.tesco.ie/groceries/en-IE/products/299531363")
  const $ = cheerio.load(data)
}
 
getHTML()
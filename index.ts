import { getHTML,getTescoWine } from "./lib/utils";

async function go() {
  const price =  await getTescoWine("https://www.tesco.ie/groceries/en-IE/products/299531363")
  console.log(`The price of this wine in Tesco is ${price}`)

}

go()

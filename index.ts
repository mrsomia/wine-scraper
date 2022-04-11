import { Item, RecordedPrice, Data, db } from './lib/db.js';
import { getDunnesPrice, getTescoPrice } from "./lib/utils.js";

async function go() {
const tPromise = getTescoPrice("https://www.tesco.ie/groceries/en-IE/products/299531363")
const dPromise = getDunnesPrice("https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/19-crimes-the-uprising-red-wine-750ml-100227693")

const [tPrice, dPrice] = await Promise.all([tPromise, dPromise])
console.log(`The price of this wine in Tesco is ${tPrice}`)
console.log(`The price of this wine in Dunne's is ${dPrice}`)

}

console.log(db.data)

// go()

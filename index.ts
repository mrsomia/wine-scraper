import { db, Item } from './lib/db.js';
import { getDunnesPrice, getTescoPrice } from "./lib/utils.js";

async function fetchPrices(items: Item[]) {
  for (let item of items) {
    let tPromise
    let dPromise
    for (let prop in item.URLs) {
      if (prop === 'tesco') {
        tPromise = getTescoPrice(item.URLs[prop])
      }
      if (prop === 'dunnes') {
        dPromise = getDunnesPrice(item.URLs[prop])
      }
    }
    const [tPrice, dPrice] = await Promise.all([tPromise, dPromise])
    console.log(`The price of ${item.name} is:
      Tesco: ${tPrice?.toFixed(2)}
      Dunne's ${dPrice?.toFixed(2)}`)
  }


}

const items = db.data?.items ?? []

fetchPrices(items)

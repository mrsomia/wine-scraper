import { db, Item } from './lib/db.js';
import { getDunnesPrice, getSuperValuPrice, getTescoPrice } from "./lib/utils.js";

async function fetchPrices(items: Item[]) {
  for (let item of items) {
    let tPromise
    let dPromise
    let sPromise
    for (let prop in item.URLs) {
      if (prop === 'tesco') {
        tPromise = getTescoPrice(item.URLs[prop])
      }
      if (prop === 'dunnes') {
        dPromise = getDunnesPrice(item.URLs[prop])
      }
      if (prop === 'supervalu') {
        // @ts-ignore
        sPromise = getSuperValuPrice(item.URLs[prop])
      }
    }
    const [tPrice, dPrice, sPrice] = await Promise.all([tPromise, dPromise, sPromise])
    console.log(`The price of ${item.name} is:
      Tesco: ${tPrice?.toFixed(2)}
      Dunne's: ${dPrice?.toFixed(2)}
      ${sPrice ? "SuperValu " + sPrice?.toFixed(2) : ""}`)
  }

}

const items = db.data?.items ?? []

fetchPrices(items)

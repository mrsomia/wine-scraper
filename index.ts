import { db, Item } from './lib/db.js';
import { getDunnesPrice, getSuperValuPrice, getTescoPrice } from "./lib/utils.js";

async function scrapePrices(items: Item[]) {
  for (let item of items) {
    let tPromise, dPromise, sPromise;

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
    const priceObj = {
      date: Date.now(),
      prices: {
        tesco: tPrice,
        dunnes: dPrice
      }
    }
    
    // @ts-ignore
    if (sPrice) priceObj.prices.supervalu = sPrice

    item.recordedPrices.push(priceObj)
    db.write()

  }

}

const items = db.data?.items ?? []

scrapePrices(items)

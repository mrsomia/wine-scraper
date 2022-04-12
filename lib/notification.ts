import axios from "axios";
import "dotenv/config"

import { Low } from "lowdb/lib";
import { Data, RecordedPrice } from "./db";

const PUSHOVER_URL = "https://api.pushover.net/1/messages.json"

export async function pingDetails(toPing: any[]) {
  let message: string = ''
  for (let item of toPing) {
    message += `The price of ${item.name} in ${item.shop} went down to ${item.price.toFixed(2)}\n`
  }
  
  axios.post( PUSHOVER_URL,
    {
      token: process.env.PUSHOVER_APP_KEY,
      user: process.env.PUSHOVER_USER_KEY,
      message
    }
  )
}

export async function checkAndPing(db: Low<Data>) {
  const items = db.data?.items ?? [];
  let toPing = []
  for (let item of items) {
    let { name, recordedPrices } = item
    let [yesterday, today] = recordedPrices.slice(-2)
    let yMin = getMin(yesterday), tMin = getMin(today)

    if (tMin && yMin && tMin[1] < yMin[1]) {
      let [shop, price] = tMin
      toPing.push({name, shop, price})
    } // pingDetails(tMin)
  }
  if (toPing.length) pingDetails(toPing)
}

function getMin(priceObj: RecordedPrice) {
  let { prices } = priceObj
  let min:[string, Number] | undefined
  for (let shop in prices) {
    if (!min) {
      //@ts-ignore
      min = [shop, prices[shop]]
    } else {
      // @ts-ignore
      if (prices[shop] < min[1]) {
        // @ts-ignore
        min = [shop, prices[shop]]
      }
    }
  }
  return min
}

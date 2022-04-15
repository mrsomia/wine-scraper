import axios from "axios";
import "dotenv/config"
import { FastifyLoggerInstance } from "fastify";

import { Low } from "lowdb/lib";
import { Data, RecordedPrice } from "./db";

const PUSHOVER_URL = "https://api.pushover.net/1/messages.json"

export async function pingDetails(toPing: any[], log:FastifyLoggerInstance) {
  let message: string = ''
  for (let item of toPing) {
    message += `The lowest price of ${item.name} in ${item.shop} went ${item.change} to €${item.minPrice.toFixed(2)}\n`
  }
  try {
    axios.post( PUSHOVER_URL,
      {
        token: process.env.PUSHOVER_APP_KEY,
        user: process.env.PUSHOVER_USER_KEY,
        message
      }
    )
  } catch (err) {
    log.error("Error sending pushover notification", err)
  }
}


export async function checkAndPing(db: Low<Data>, log: FastifyLoggerInstance) {
  const items = db.data?.items ?? [];
  let toPing = []
  for (let item of items) {
    const { name, recordedPrices } = item
    
    // fix the below line to hanle 1 item in the array
    const [ previous, current ] = recordedPrices.slice(-2)
    const pMin = getMin(previous)
    const cMin = getMin(current)
    const { shop, price } = cMin
    
    if (cMin.shop && !pMin.shop) {
      toPing.push({change: 'down' ,name, shop, minPrice: price})
    }

    // TODO: Refactor below, perhaps a new function to make it clear this is comparison code
    if (cMin.shop && pMin.shop){
      if (cMin.price < pMin.price) {
        toPing.push({change: 'down' ,name, shop, minPrice: price})
      } else if (cMin.price > pMin.price) {
        toPing.push({change: 'up' ,name, shop, minPrice: price})
      }
    }
  }
  if (toPing.length) pingDetails(toPing, log)
}

function getMin(priceObj: RecordedPrice) {
  const { prices } = priceObj
  let min = {
    shop: '',
    price: 0
  }

  for (const shop in prices) {
    if (prices[shop] < min.price || !min.shop) {
      min = { shop, price: prices[shop]}
    }
  }
  return min
}

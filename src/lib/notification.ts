import axios from "axios";
import "dotenv/config"

import { Low } from "lowdb/lib";
import { Data, Item, RecordedPrice } from "./dao.js";

export const PUSHOVER_URL = "https://api.pushover.net/1/messages.json"

export interface MessageObject {
  change: 'up' | 'down',
  name: string,
  shop: string,
  minPrice: number
}

export async function pingDetails(toPing: MessageObject[]) {
  if (!toPing.length) return
  let message: string = ''
  for (let item of toPing) {
    message += `The lowest price of ${item.name} in ${item.shop} went ${item.change} to €${item.minPrice.toFixed(2)}\n`
  }
  axios.post( PUSHOVER_URL,
    {
      token: process.env.PUSHOVER_APP_KEY,
      user: process.env.PUSHOVER_USER_KEY,
      message
    }
  )
}

function makeMessageObject(item: Item): MessageObject | void {
  const { name, recordedPrices } = item
  let [ first, second ] = recordedPrices.slice(-2)
  let fMin = getMin(first)
  let sMin

  if (!second) return {change: 'down' , name, shop: fMin.shop, minPrice: fMin.price}
  
  sMin = getMin(second)
  let { shop, price } = sMin 

  if (sMin.shop && fMin.shop){
    if (sMin.price < fMin.price) {
      return {change: 'down' ,name, shop, minPrice: price}
    } else if (sMin.price > fMin.price) {
      return {change: 'up' ,name, shop, minPrice: price}
    }
  }
}

export function makeMessageArray(db: Low<Data>) {
  const items = db.data?.items ?? [];
  let toPing: MessageObject[] = []
  for (let item of items) {
    if (item.recordedPrices.length < 1) continue
    let notificationObj = makeMessageObject(item)
    if (notificationObj) toPing.push(notificationObj)
  }
  return toPing
}

function getMin(priceObj: RecordedPrice) {
  const { prices } = priceObj
  let min = {
    shop: '',
    price: 0
  }

  for (const shop in prices) {
    if (!prices[shop]) continue
    if (prices[shop] < min.price || !min.shop) {
      min = { shop, price: prices[shop]}
    }
  }
  return min
}

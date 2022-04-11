import { Low, JSONFile } from 'lowdb'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export type Item = {
  name: string,
  URLs: {
    tesco: string,
    dunnes: string,
    supervalu?: string
  },
  recordedPrices: RecordedPrice[]
}

export type RecordedPrice = {
  date: number,
  prices: {
    tesco?: Number,
    dunnes?: Number,
    supervalu?: Number
  }
}

export type Data = {
  items: Item[],
}

const exampleData = {

}

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')

const adapter = new JSONFile<Data>(file)
const db = new Low(adapter)
await db.read()

export { db }
export const items = db.data?.items ?? []

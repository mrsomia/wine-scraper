import { PrismaClient } from '@prisma/client'
import { Low, JSONFile } from 'lowdb'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export interface Item {
  name: string,
  URLs: {
    [location: string]: string
  },
  recordedPrices: RecordedPrice[]
}

export interface RecordedPrice {
  date: number,
  prices: {
    [location: string]: number
  }
}

export interface Data {
  items: Item[],
}
// kept in a different file so that it can be imported into routes
export const prisma = new PrismaClient()

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')

const adapter = new JSONFile<Data>(file)
const db = new Low(adapter)
await db.read()

export { db }

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

export async function createItem(item: Omit<Item, "recordedPrices">) {
  const createdItem  = await prisma.item.create({
    data : {
      name: item.name,
      urls: {
        create: {
          tesco: item.URLs?.tesco,
          supervalu: item.URLs?.supervalu,
          dunnes: item.URLs?.dunnes
        }
      }
    },
    select: {
      id: true,
      name: true,
      urls: {
        select: {
          tesco: true,
          supervalu: true,
          dunnes: true
        }
      }
    }
  })
  return createdItem
}

export async function updateDBItem(item: {id: number, name: string}) {
  const updatedItem = await prisma.item.update({
    where: {
      id: item.id
    },
    data: {
      name: item.name
    }
  })
  return updatedItem
}

export async function getAllItemsWithPrices(){
  const items = await prisma.item.findMany({
    include: {
      prices: {
        orderBy: {
          dateTime: 'asc' // This needs testing to check the last item is the latest
        },
        take: -1
      }
    }
  })
  return items
}

// To Remove
const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')

const adapter = new JSONFile<Data>(file)
const db = new Low(adapter)
await db.read()

export { db }

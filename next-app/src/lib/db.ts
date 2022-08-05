import { PrismaClient } from '@prisma/client'
import type { PriceRecord, Urls, Item } from '@prisma/client'

// kept in a different file so that it can be imported into routes
export const prisma = new PrismaClient()

export async function createItem(name: string, urls : Partial<Urls>) {
  const createdItem  = await prisma.item.create({
    data : {
      name: name,
      urls: {
        create: {
          tesco: urls?.tesco,
          supervalu: urls?.supervalu,
          dunnes: urls?.dunnes
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

export async function getLatestItemPrices(amount= 1){
  const items = await prisma.item.findMany({
    include: {
      prices: {
        orderBy: {
          dateTime: 'asc' // This needs testing to check the last item is the latest
        },
        take: -amount
      }
    }
  })
  return items
}

export async function getAllItemsPrices(id:number, last = 60) {
  const items = await prisma.item.findUnique({
    where: {
      id: id
    },
    include: {
      prices: {
        orderBy: {
          dateTime: 'asc'
        },
        take: last,
      }
    }
  })
  return items
}

export async function getAllItemsAndUrls() {
  const items = await prisma.item.findMany({
    include: {
      urls: true
    }
  })
  return items
}

export async function addNewPrice(priceObj: Omit<PriceRecord, "id">) {
  const priceRecord = await prisma.priceRecord.create({
    data: priceObj
  })
  return priceRecord
}
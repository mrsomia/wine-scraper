import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { items } from './db-data'

const prisma = new PrismaClient()

async function main() {
  for (const item of items) {
  
    const addedItem = await prisma.item.create({
      data : {
        name: item.name,
        urls: {
          create: {
            ...item.URLs
          }
        },
        prices: {
          create: item.recordedPrices.map(p => {
            return { dateTime: (new Date(p.date)), ...p.prices}
          })
        }
      },
    })

    console.log(`item added:`, addedItem)
  }

  for (let index = 0; index < 25; index++) {

    const addedItem = await prisma.item.create({
      data : {
        name: faker.commerce.productName(),
        urls: {
          create: {
            tesco: `https://www.tesco.ie/groceries/en-IE/products/${faker.random.numeric(9)}`,
            dunnes: `https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/${faker.random.numeric(9)}`,
            supervalu: `https://shop.supervalu.ie/shopping/product/${faker.random.numeric(10)}`,
          }
        },
        prices: {
          create: new Array(30).fill(0).map((_, i) => {
            const date = new Date(Date.now() - ((30 - i) * 24 * 60 * 60 * 1000))
            return {
              dateTime: date,
              tesco: Number(faker.commerce.price(5, 30)),
              dunnes: Number(faker.commerce.price(5, 30)),
              supervalu: Number(faker.commerce.price(5, 30)),
            }
          })
        }
      },
    })
    
    console.log(addedItem)
  }

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
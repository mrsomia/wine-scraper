import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import schedule from 'node-schedule'
// import { db } from './lib/db.js';
// import { scrapePricesAndAddToDB } from './lib/scrape-utils.js';
// import { makeMessageArray, pingDetails } from './lib/notification.js'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const fastify = Fastify({
  logger: {
    level : 'info',
    file: './logs/logs.txt'
  }
})

// const job = schedule.scheduleJob('0 14 * * *', async function(){
//   await scrapePricesAndAddToDB(db)
//   let messageArr = makeMessageArray(db)
//   try {
//     pingDetails(messageArr)
//   } catch (err) {
//     fastify.log.error(err)
//   }
// })


fastify.post('/item', async function(request: FastifyRequest, reply: FastifyReply): Promise<any> {
  // inject db, this will allow mocking for testing
  const { body: item } = request
  let Item = z.object({
    name: z.string(),
    URLs: z.object({
      tesco: z.string(),
      dunnes: z.string(),
      supervalu: z.string()
    }).partial()
  })

  const validated = Item.safeParse(item)
  if (validated.success) {
    // check if item exists already
    const validatedItem = {...validated.data, recordedPrices: [] }
    console.log(validatedItem)
    await prisma.item.create({
      data: {
        name: validatedItem.name,
        urls: {
          create : {
            tesco: validatedItem.URLs.tesco,
            dunnes: validatedItem.URLs.dunnes,
            supervalu: validatedItem.URLs.supervalu
          }
        }
      }
    })
    const items = await prisma.item.findMany()
    console.log(items)
    reply.send({
      item: validatedItem,
      message: 'Success',
    })
  } else {
    const { error } = validated
    reply.code(400)
      .send({
      message: 'Error',
      error: error.issues
    })
  }
})

fastify.listen(8080, "127.0.0.1")
  .then(address => console.log(`Server is now listening on ${address}`))
  .catch(err => {
  console.log('Error starting server:', err)
  process.exit(1)
  })
import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import schedule from 'node-schedule'
import { z } from 'zod'
import { db } from './lib/db.js';
import { scrapePricesAndAddToDB } from './lib/scrape-utils.js';
import { makeMessageArray, pingDetails } from './lib/notification.js'
import { getLatestPrices } from './routes/item-prices.js';

export const fastify = Fastify({
  logger: {
    level : 'info',
    file: './logs/logs.txt'
  }
})

const job = schedule.scheduleJob('0 14 * * *', async function(){
  await scrapePricesAndAddToDB(db)
  let messageArr = makeMessageArray(db)
  try {
    pingDetails(messageArr)
  } catch (err) {
    fastify.log.error(err)
  }
})


fastify.get('/item-prices', getLatestPrices)

fastify.post('/item',async (request: FastifyRequest, reply: FastifyReply) => {
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
    db.data?.items.push(validatedItem)
    db.write()
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

fastify.listen(8080, "127.0.0.1", function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})

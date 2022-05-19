import Fastify from 'fastify';
import schedule from 'node-schedule'
import { z } from 'zod'
import { db } from './lib/db';
import { scrapePrices } from './lib/utils';
import { makeMessageArray, pingDetails } from './lib/notification'

export const fastify = Fastify({
  logger: {
    level : 'info',
    file: './logs/logs.txt'
  }
})

const job = schedule.scheduleJob('0 14 * * *', async function(){
  await scrapePrices(db)
  let messageArr = makeMessageArray(db)
  try {
    pingDetails(messageArr)
  } catch (err) {
    fastify.log.error(err)
  }
})

const items = db.data?.items ?? []

fastify.get('/item-prices', async (request, reply) => {
  let response: any[] = []
  for (let item of items) {
    const { name, recordedPrices } = item;
    let data = recordedPrices[recordedPrices.length - 1]
    response.push({name, data})
  }
  reply.send(response)
})

fastify.post('/item',async (request, reply) => {
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

fastify.listen(8080,function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})

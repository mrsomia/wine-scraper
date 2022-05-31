import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import schedule from 'node-schedule'
import { db } from './lib/db.js';
import { scrapePricesAndAddToDB } from './lib/scrape-utils.js';
import { makeMessageArray, pingDetails } from './lib/notification.js'
import { getLatestPrices } from './routes/item-prices.js';
import { addNewItem } from './routes/item.js';

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
fastify.post('/item', addNewItem)

fastify.listen(8080, "127.0.0.1")
  .then(address => console.log(`Server is now listening on ${address}`))
  .catch(err => {
  console.log('Error starting server:', err)
  process.exit(1)
  })

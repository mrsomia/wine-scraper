import Fastify from 'fastify';
import cors from '@fastify/cors'
import schedule from 'node-schedule'
import { scrapePricesAndAddToDB } from './lib/scrape-utils.js';
import { makeMessageArray, pingDetails } from './lib/notification.js'
import { getLatestPrices } from './routes/item-prices.js';
import { addNewItem , getAllOfItem, updateItem} from './routes/item.js';
import { getLatestItemPrices } from './lib/dao.js';

export const fastify = Fastify({
  logger: {
    level : 'info',
    file: './logs/logs.txt'
  }
})

const job = schedule.scheduleJob('0 14 * * *', async function(){
  await scrapePricesAndAddToDB()
  const items = await getLatestItemPrices(2)
  let messageArr = makeMessageArray(items)
  try {
    pingDetails(messageArr)
  } catch (err) {
    fastify.log.error(err)
  }
})

fastify.register(cors, {})
fastify.get('/item-prices', getLatestPrices)
fastify.post('/item', addNewItem)
fastify.put('/item', updateItem)
fastify.post('/item/get-all-prices', getAllOfItem)

fastify.listen({ port:8080, host:"127.0.0.1"}, (err, address) => {
  console.log(`Server is now listening on ${address}`)
  if (err) {
  console.log('Error starting server:', err)
  process.exit(1)
  }
})

import Fastify from 'fastify';
import schedule from 'node-schedule'
import { db } from './lib/db.js';
import { scrapePrices } from './lib/utils.js';
import { checkAndPing } from './lib/notification.js'


const job = schedule.scheduleJob('44 0 * * *', async function(){
  await scrapePrices(db)
  checkAndPing(db)
})

const fastify = Fastify({logger: true})
const items = db.data?.items ?? []

fastify.get('/prices',async (request, reply) => {
  let response: any[] = []
  for (let item of items) {
    const { name, recordedPrices } = item;
    let data = recordedPrices[recordedPrices.length - 1]
    response.push({name, data})
  }
  reply.send(response)
})


fastify.listen(8080,function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})

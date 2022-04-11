import Fastify from 'fastify';
import { db } from './lib/db.js';

const fastify = Fastify({logger: true})
const items = db.data?.items ?? []

fastify.get('/prices',async (request, reply) => {
  let response: any[] = []
  for (let item of items) {
    const { name, recordedPrices } = item;
    let priceObj = recordedPrices[recordedPrices.length - 1]
    response.push({name, priceObj})
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

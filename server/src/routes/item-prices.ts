import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { getLatestItemPrices } from "../lib/dao.js"

export async function getLatestPrices(request: FastifyRequest, reply: FastifyReply): Promise<any> {
  let response: any[] = []
  const items = await getLatestItemPrices()
  for (let item of items) {
    const { id, name, prices } = item;
    let data = prices[prices.length - 1]
    response.push({id, name, data})
  }
  reply.send(items)
}

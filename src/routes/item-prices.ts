import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { db } from "../lib/dao.js"

export async function getLatestPrices(request: FastifyRequest, reply: FastifyReply): Promise<any> {
  let response: any[] = []
  const items = db.data?.items ?? []
  for (let item of items) {
    const { name, recordedPrices } = item;
    let data = recordedPrices[recordedPrices.length - 1]
    response.push({name, data})
  }
  reply.send(response)
}
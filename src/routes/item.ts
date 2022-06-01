import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { createItem } from '../lib/dao.js'

export async function addNewItem(request: FastifyRequest, reply: FastifyReply): Promise<any> {
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
    
    // need to add validate that the item does not exist
    const item  = await createItem(validatedItem)

    reply.send({
      item,
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
}

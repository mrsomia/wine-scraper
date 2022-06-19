import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { createItem, getAllItemsPrices, updateDBItem } from '../lib/dao.js'

export async function addNewItem(request: FastifyRequest, reply: FastifyReply): Promise<any> {
  // inject db, this will allow mocking for testing
  const { body: item } = request
  let Item = z.object({
    name: z.string(),
    urls: z.object({
      tesco: z.string(),
      dunnes: z.string(),
      supervalu: z.string()
    }).partial()
  })

  const validated = Item.safeParse(item)
  if (validated.success) {
    const item  = await createItem(validated.data.name, validated.data.urls)
    // TODO: check if item exists already

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

export async function updateItem(request: FastifyRequest, reply: FastifyReply): Promise<any> {
  const { body: item } = request
  let updatedItem = z.object({
    id: z.number(),
    name: z.string()
  })

  const validatedItemUpdate =  updatedItem.safeParse(item)

  if (validatedItemUpdate.success) { 
    const x = await updateDBItem(validatedItemUpdate.data)
    
    reply.send({
      item,
      message: 'Success'
    })
  } else {
    const { error } = validatedItemUpdate
    reply.code(400)
      .send({
        message: "Error",
        error: error.issues
      })
  }
}

export async function getAllOfItem(request: FastifyRequest, reply: FastifyReply): Promise<any> {
  const { body: item } = request
  let requestedItem = z.object({
    id: z.number()
  })

  const validatedRequestedItem = requestedItem.safeParse(item)

  if (validatedRequestedItem.success) {
    const itemPrices = await getAllItemsPrices(validatedRequestedItem.data.id)

    reply.send({
      item: itemPrices,
      message: 'Succes'
    })
  } else {
    const { error } = validatedRequestedItem
    reply.code(400)
      .send({
        message: 'Error',
        error: error.issues
      })
  }
}

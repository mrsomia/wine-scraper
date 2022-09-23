// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { getAllItemsPrices } from '../../../lib/db'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let { body: item } = req
  if (typeof item === 'string') item = JSON.parse(item)
  let requestedItem = z.object({
    id: z.string(),
    numberOfPriceRecords: z.number().optional(),
  });

  const validatedRequestedItem = requestedItem.safeParse(item)

  if (validatedRequestedItem.success) {
    const numberOfRecords = validatedRequestedItem.data.numberOfPriceRecords ?? 30
    const itemPrices = await getAllItemsPrices(validatedRequestedItem.data.id, numberOfRecords)

    res.status(200).json({
      item: itemPrices,
      message: 'Success'
    })
  } else {
    const { error } = validatedRequestedItem
    res.status(400)
      .json({
        message: 'Error',
        error: error.issues
      })
  }
}

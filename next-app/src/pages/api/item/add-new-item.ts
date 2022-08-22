// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { createItem } from '../../../lib/db'
// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body: item } = req
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

    res.status(201).json({
      item,
      message: 'Success',
    })
  } else {
    const { error } = validated
    res.status(400)
      .send({
      message: 'Error',
      error: error.issues
    })
  }
}

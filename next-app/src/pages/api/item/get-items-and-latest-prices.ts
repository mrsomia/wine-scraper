// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { PriceRecord, Item } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getLatestItemPrices } from '../../../lib/db';

type Data = Item & { prices: PriceRecord[]}

export default async function getItemsAndLatestPrices(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const items = await getLatestItemPrices()

  res.status(200).json(items)
}

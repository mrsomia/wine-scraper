// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { updateItem } from "../../../lib/db";
// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res
      .status(405)
      .json({
        message: "Error",
        error: `HTTP method ${req.method} is not permitted`,
      });
  }
  const { body: item } = req;
  let updatedItem = z.object({
    id: z.number(),
    name: z.string(),
  });

  const validatedItemUpdate = updatedItem.safeParse(item);

  if (validatedItemUpdate.success) {
    const x = await updateItem(validatedItemUpdate.data);

    res.send({
      item,
      message: "Success",
    });
  } else {
    const { error } = validatedItemUpdate;
    res.status(400).send({
      message: "Error",
      error: error.issues,
    });
  }
}

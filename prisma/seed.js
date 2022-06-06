import { PrismaClient } from "@prisma/client";
//@ts-ignore
import * as json from "../src/lib/db.json" assert { type: "json" };

const prisma = new PrismaClient();

// interface price {
//   date: number
//   prices: {
//     tesco?: number,
//     dunnes?: number,
//     supervalu?: number
//   }
// }
async function main() {
  const { items } = json.default;
  console.log(items);
  for (let item of items) {
    const pItem = await prisma.item.create({
      data: {
        name: item.name,
        urls: {
          create: {
            tesco: item.URLs?.tesco,
            dunnes: item.URLs?.dunnes,
            supervalu: item.URLs?.supervalu,
          },
        },
      },
    });

    await Promise.all(
      item.recordedPrices.map((price) =>
        prisma.priceRecord.create({
          data: {
            dateTime: new Date(price.date),
            tesco: price.prices.tesco,
            dunnes: price.prices.dunnes,
            supervalu: price.prices.supervalu,
            itemId: pItem.id,
          },
        })
      )
    );
  }
}

main()
  .then((r) => console.log("items added"))
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { describe, it, expect } from 'vitest'
import { Low } from 'lowdb/lib';
import { Data } from '../../src/lib/db';
import { makeMessageArray} from '../../src/lib/notification'


export const mockDb = {
  data: {
      "items": [
        {
          "name": "19 Crimes, The Banished Dark Red Wine",
          "URLs": {
            "tesco": "https://www.tesco.ie/groceries/en-IE/products/299531363",
            "dunnes": "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/19-crimes-the-uprising-red-wine-750ml-100227693"
          },
          "recordedPrices": [
            {
              "date": 1649606246476,
              "prices": {
                "tesco": 15,
                "dunnes": 15
              }
            },
            {
              "date": 1649634241029,
              "prices": {
                "tesco": 10,
                "dunnes": 9
              }
            }
          ]
        },
        {
          "name": "19 Crimes, Red Wine",
          "URLs": {
            "tesco": "https://www.tesco.ie/groceries/en-IE/products/299531340",
            "dunnes": "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/19-crimes-red-wine-750ml-100873366",
            "supervalu": "https://shop.supervalu.ie/shopping/product/1531948000"
          },
          "recordedPrices": [
            {
              "date": 1649606247678,
              "prices": {
                "tesco": 10,
                "dunnes": 9,
                "supervalu": 15.5
              }
            },
            {
              "date": 1649634241980,
              "prices": {
                "tesco": 14,
                "dunnes": 15,
                "supervalu": 15.5
              }
            },
          ]
        }
      ]
  }
}

describe("Notifications", ()=> {

  it("Notices prices going up and down", ()=> {
    let expectedCallWith = [
      {
        name: "19 Crimes, The Banished Dark Red Wine",
        shop: "dunnes",
        change: "down",
        minPrice: 9
      },
      {
        name: "19 Crimes, Red Wine",
        shop: "tesco",
        change: "up",
        minPrice: 14
      }
    ]

    const actual = makeMessageArray(mockDb as unknown as Low<Data>)
    expect(actual).toEqual(expectedCallWith)
  })
})
import { describe, it, expect } from 'vitest'
import { fastify } from "../src/index";

describe('/item-prices route', () => {
  it('Retrieves prices', async ()=> {
    const expected = [{
      name: '19 Crimes, The Banished Dark Red Wine',
      data: {
        date: 1649634241029,
        "prices": {
          "tesco": 10,
          "dunnes": 9
        }
        }
    },
    {
    name: '19 Crimes, Red Wine"',
    data:{
      "date": 1649634241980,
      "prices": {
        "tesco": 10,
        "dunnes": 9,
        "supervalu": 15.5
      }
    }
    }
    ]

    const respone = await fastify.inject({
      method: 'GET',
      url: '/item-prices'
    })

    expect(respone.statusCode).toBe(200)
    expect(respone.body)
  })
})
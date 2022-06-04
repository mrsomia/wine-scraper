import { describe, test, expect } from 'vitest'
import { fastify } from "../../src/index";

describe('/item-prices route', () => {
  test('Retrieves prices as expected', async ()=> {
    const expected = [
      {
        id: 1,
        name: "Jameson 70cl",
        prices: []
      },
      {
        id: 2,
        name: "19 Crimes Red Wine",
        prices: []
      },
      {
        id: 3,
        name: "19 Crimes Dark Red Wine",
        prices: []
      },
      
    ]

    const response = await fastify.inject({
      method: 'GET',
      url: '/item-prices'
    })

    const responeValue = response.json()

    expect(response.statusCode).toBe(200)
    expect(responeValue).toMatchObject(expected)
    expect(responeValue[0]).toHaveProperty("id")
    expect(responeValue[0]).toHaveProperty("urlsId")
  })
})
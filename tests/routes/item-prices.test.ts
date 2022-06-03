import { describe, test, expect } from 'vitest'
import { fastify } from "../../src/index";

describe('/item-prices route', () => {
  test('Retrieves prices as expected', async ()=> {
    const expected = [
      {
        "name": "Jameson 70cl",
        "prices": []
      }
    ]

    const response = await fastify.inject({
      method: 'GET',
      url: '/item-prices'
    })

    const responeValue = JSON.parse(response.body)

    expect(response.statusCode).toBe(200)
    expect(responeValue).toMatchObject(expected)
    expect(responeValue[0]).toHaveProperty("id")
    expect(responeValue[0]).toHaveProperty("urlsId")
  })
})
import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { fetch } from 'cross-fetch'
import React from "react";
import UserHome from "../../src/pages";
import { render, screen } from "@testing-library/react";
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const mockedResponse = [
  {
    id: 1,
    name: '19 Crimes Red',
    urlsId: 1,
    prices: [
      {
        dateTime: '2022-07-18T21:48:42.942Z',
        id: 9,
        itemId: 1,
        supervalu: 12,
        tesco: 10,
        dunnes: 9.6,
      },
    ]
  },
  {
    id: 2,
    name: '19 Crimes Dark Red',
    urlsId: 2,
    prices: [
      {
        dateTime: '2022-07-18T21:48:42.942Z',
        id: 10,
        itemId: 2,
        supervalu: 15,
        tesco: 12,
        dunnes: 9.6,
      },
    ]
  },
  {
    id: 3,
    name: "Jack Daniel's",
    urlsId: 3,
    prices: [
      {
        dateTime: '2022-07-18T21:48:42.942Z',
        id: 11,
        itemId: 1,
        supervalu: 30,
        tesco: 26,
        dunnes: 23,
      },
    ]
  },
  {
    id: 4,
    name: "Jameson",
    urlsId: 4,
    prices: [
      {
        dateTime: '2022-07-18T21:48:42.942Z',
        id: 12,
        itemId: 1,
        supervalu: 28,
        tesco: 25,
        dunnes: 30,
      },
    ]
  },
]

global.fetch = fetch

const server = setupServer(
  rest.get('http://localhost:8080/item-prices', (req, res, ctx) => {
    return res(
      ctx.json(mockedResponse),
      ctx.status(200)
      )
  })
)

describe('User Home Page', () => {
  
  beforeAll(() => server.listen({
    onUnhandledRequest: 'error',
  }))
  afterAll(() => server.close())

  test('should render', async () => {
    render(
      <UserHome />
    )
    expect(screen.getByText(/Items/)).toBeDefined()
    expect(await screen.findByText(/19 Crimes Dark Red/)).toBeDefined()
  })
})

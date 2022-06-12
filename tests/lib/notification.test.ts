import { describe, it, expect, vi, afterEach } from 'vitest'
import { makeMessageArray, pingDetails, MessageObject, PUSHOVER_URL } from '../../src/lib/notification'
import axios from 'axios'


export const mockDbResults = [
        {
          id: 1,
          "name": "19 Crimes Dark Red Wine",
          urlsId: 1,
          "prices": [
            {
              id: 1,
              dateTime: new Date(1649606246476),
              "tesco": 15,
              "dunnes": 15,
              supervalu: null,
              itemId: 1,
            },
            {
              id: 1,
              dateTime: new Date(1649634241029),
              "tesco": 10,
              "dunnes": 9,
              supervalu: null,
              itemId: 1
            },
          ]
        },
        {
          id: 2,
          "name": "19 Crimes Red Wine",
          urlsId: 2,
          "prices": [
            {
              id: 1,
              dateTime: new Date(1649606247678),
              "tesco": 10,
              "dunnes": 9,
              "supervalu": 15.5,
              itemId: 2,
            },
            {
              id: 1,
              dateTime: new Date(1649634241980),
              "tesco": 14,
              "dunnes": 15,
              "supervalu": 15.5,
              itemId: 2,
            },
          ]
        }
      ]

vi.mock('axios', () => {
  return {
    default : {
      get: vi.fn(),
      post: vi.fn()
    }
  }
})

describe("Notifications", ()=> {

  afterEach(()=> {
    vi.clearAllMocks()
  })

  let expectedCallPingDetailsWith = [
    {
      name: "19 Crimes Dark Red Wine",
      shop: "dunnes",
      change: "down",
      minPrice: 9
    },
    {
      name: "19 Crimes Red Wine",
      shop: "tesco",
      change: "up",
      minPrice: 14
    }
  ]
  
  it("Notices prices going up and down", async ()=> {

    const actual = makeMessageArray(mockDbResults)
    expect(actual).toEqual(expectedCallPingDetailsWith)
  })

  it("sends the correct notification", () => {
    pingDetails(expectedCallPingDetailsWith as MessageObject[])
    expect(axios.post).toBeCalledTimes(1)
    expect(axios.post).toBeCalledWith(PUSHOVER_URL, {
        token: process.env.PUSHOVER_APP_KEY,
        user: process.env.PUSHOVER_USER_KEY,
        message: `The lowest price of 19 Crimes Dark Red Wine in dunnes went down to €9.00\nThe lowest price of 19 Crimes Red Wine in tesco went up to €14.00\n`,
    })
  })

})

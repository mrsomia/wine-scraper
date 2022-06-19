import { after } from "cheerio/lib/api/manipulation";
import { describe, expect, test, vi, afterEach } from "vitest";
import { fastify } from "../../src/index";
import { createItem, getAllItemsPrices } from "../../src/lib/dao";

const expectedFromGetAllItems = {
    "id": 1,
    "name": "19 Crimes Dark Red Wine",
    "urlsId": 1,
    "prices": [
      {
        "id": 1,
        "dateTime": "2022-04-10T15:57:26.476Z",
        "tesco": 15,
        "dunnes": 15,
        "supervalu": null,
        "itemId": 1
      },
      {
        "id": 2,
        "dateTime": "2022-04-10T23:44:01.029Z",
        "tesco": 10,
        "dunnes": 9,
        "supervalu": null,
        "itemId": 1
      },
      {
        "id": 5,
        "dateTime": "2022-06-06T00:22:01.222Z",
        "tesco": 15,
        "dunnes": 9.6,
        "supervalu": null,
        "itemId": 1
      }
    ]
  }

vi.mock("../../src/lib/dao", () => {
  return {
    createItem: vi.fn(),
    getAllItemsPrices: vi.fn().mockImplementation((id) => id === 1 ? expectedFromGetAllItems : undefined)
  };
});

describe("Tests add new item route", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const payload = {
    name: "Jameson 70cl",
    urls: {
      tesco: "https://www.tesco.ie/groceries/en-IE/products/256409920",
      dunnes:
        "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/jameson-triple-distilled-irish-whiskey-700ml-100671200",
      supervalu:
        "https://shop.supervalu.ie/shopping/search/allaisles?q=jameson",
    },
  };

  test("It Should return correctly with correct input", async () => {
    const response = await fastify.inject({
      method: "POST",
      url: "/item",
      payload: payload,
    });

    expect(createItem).toBeCalledTimes(1);
    expect(createItem).toBeCalledWith(payload.name, payload.urls);
    expect(JSON.parse(response.body)).toMatchObject({message: "Success"})
  });

  test("it should fail with incorrect input", async ()=> {
    const payload = {
      item: "Jameson 70cl",
      urls: {
        tesco: "https://www.tesco.ie/groceries/en-IE/products/256409920",
        dunnes:
          "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/jameson-triple-distilled-irish-whiskey-700ml-100671200",
        supervalu:
          "https://shop.supervalu.ie/shopping/search/allaisles?q=jameson"
      }
    }

    const response = await fastify.inject({
      method: "POST",
      url: "/item",
      payload: payload
    })


    expect(createItem).not.toBeCalled()
    expect(response.json()).toMatchObject({ message: "Error"})
    expect(response.statusCode).toBe(400)
  })
});

describe("tests get all price records of an item route", ()=> {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test("should get all item price records", async ()=> {
    const payload = {
      id: 1
    }

    const response = await fastify.inject({
      method: "POST",
      url: "/item/get-all-prices",
      payload
    })

    expect(getAllItemsPrices).toBeCalled()
    expect(JSON.parse(response.body)).toEqual({message: "Success", item: {...expectedFromGetAllItems}})
  })

  test("should return error with incorrect input", async () => {
    const payload = {
      id: '1'
    }

    const response = await fastify.inject({
      method: "POST",
      url: "/item/get-all-prices",
      payload
    })

    expect(getAllItemsPrices).not.toBeCalled();
    expect(response.json()).toMatchObject({ message: 'Error'})
    expect(response.statusCode).toBe(400)
  })
})

import { describe, expect, test, vi, afterEach } from "vitest";
import { fastify } from "../../src/index";
import { createItem } from "../../src/lib/dao";

vi.mock("../../src/lib/dao", () => {
  return {
    createItem: vi.fn(),
  };
});

describe("Tests add new items", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const payload = {
    name: "Jameson 70cl",
    URLs: {
      tesco: "https://www.tesco.ie/groceries/en-IE/products/256409920",
      dunnes:
        "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/jameson-triple-distilled-irish-whiskey-700ml-100671200",
      supervalu:
        "https://shop.supervalu.ie/shopping/search/allaisles?q=jameson",
    },
  };

  test("Returns correctly with correct input", async () => {
    const response = await fastify.inject({
      method: "POST",
      url: "/item",
      payload: payload,
    });

    expect(createItem).toBeCalledTimes(1);
    expect(createItem).toBeCalledWith(payload);
    expect(JSON.parse(response.body)).toMatchObject({message: "Success"})
  });
});

import { isoToChartDate, PriceRecord } from "../../src/lib/utils";

describe('util functions', () => {
  const mockPriceRecord: PriceRecord = {
    dateTime: '2022-07-18T21:48:42.942Z',
    id: 3,
    itemId: 4,
    supervalu: null,
    tesco: 12,
    dunnes: 9.6,
  }

  test('should convert dates from ISOString to human for charts', () => {
    expect(isoToChartDate(mockPriceRecord)).toBe("18 Jul 22")
  })
})
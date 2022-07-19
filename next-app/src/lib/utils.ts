
export interface PriceRecord {
  dateTime: string;
  id: number;
  itemId: number;
  supervalu: number | null;
  tesco: number | null;
  dunnes: number | null;
}

export interface Item {
  name: string;
  id: number;
  urlsId: number;
  prices: PriceRecord[];
}

export const isoToChartDate = (priceRecord: PriceRecord) => {
  let d = new Date(priceRecord.dateTime)
  return d.toLocaleDateString(undefined, 
    {day: 'numeric', month: 'short', year: '2-digit'}
  )
}
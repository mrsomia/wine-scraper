

export interface ItemProps {
  name: string;
  id: number;
  urlsId: number;
  prices: PriceRecord[];
}

export interface PriceRecord {
  dateTime: string;
  id: number;
  itemId: number;
  supervalu: number | null;
  tesco: number | null;
  dunnes: number | null;
}


export function Item(props: ItemProps): JSX.Element {
  const lastPrice = props.prices[0]
  let min = null
  const locations = ['tesco', 'supervalu', 'dunnes'] as const
  for (const location of locations) {
    let price = lastPrice[location]
    if (price && !min) {
      min = { location, price }
    } else if (price && min) {
      if (price < min.price) min = { location, price }
    }
  }

  return min ? (
    <div className="item">
      <h3>{props.name}</h3>
      <div className="flex">
        <span>{min.location}</span>
        <span> € {min.price.toString()}</span>
        <span> as of {new Date(props.prices[0].dateTime).toLocaleDateString()}</span>
      </div>
    </div>
  ) : <></>
}

export default Item
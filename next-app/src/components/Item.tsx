import { useContext } from "react";
import { DispatchContext } from "../lib/state-reducer";
import PriceHistoryChart from "./chart";
import { type Item } from '../lib/utils'

export interface ItemProps extends Item {
  active: boolean;
}

export function ItemCard(props: ItemProps): JSX.Element {
  const dispath = useContext(DispatchContext)

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
      <>
      <div
        className={`flex flex-col p-5 md:w-80 border-solid border-4
        ${ props.active ? "bg-sky-300" : "bg-white cursor-pointer border-sky-300"}
        rounded shadow col-start-1 w-full`}
        onClick={() => dispath({ type: 'UPDATE-ACTIVE', payload: props })}
      >
        <h3 className="text-xl font-semibold py-2 px-5">{props.name}</h3>
        <div className="flex justify-around">
          <span className="">{min.location}</span>
          <span
            title={`as of ${new Date(props.prices[0].dateTime).toLocaleDateString()}`}
          > € {min.price.toFixed(2)}</span>
        </div>
      </div>
      <div
        className={`col-start-1 lg:col-start-2 row-span-3
        lg:row-start-1 lg:col-span-2 md:row-start-1 md:col-start-2 touch-none`}
      >
        {props.active && <PriceHistoryChart activeItem={props}/>}
      </div>
      </>
  ) : <></>
}

export default ItemCard
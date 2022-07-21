import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { type Item, isoToChartDate } from '../lib/utils'

interface PriceHistoryChartProps {
  activeItem: Item
}

function PriceHistoryChart(props: PriceHistoryChartProps): JSX.Element{
  const [prices, setPrices] = useState<null | Item>(null)

  useEffect(() => {
    const getPrices = async () => {
      try {
        let response = await fetch("http://localhost:8080/item/get-all-prices", {
          method: 'POST',
          body: JSON.stringify({
            id: props.activeItem.id
          }),
          headers: {
            'Accept': 'application/JSON'
          }
        }).then(res => res.json())
        if (response.message === 'Success') {
          const { item } = response
          setPrices(item)
        } 
      } catch (e) {
       console.error(`Error when fetching historical prices for ${props.activeItem.name}`, e) 
      }
    }
    getPrices()
  }, [props.activeItem])
  
  console.log({prices})
  return prices ? (
    <ResponsiveContainer aspect={3/2} width="100%" debounce={1}>
      <LineChart data={prices.prices}>
        <Line type="natural" dataKey="tesco" stroke="#0284c7" strokeWidth={3} animationDuration={1000} dot={false} />
        <Line type="natural" dataKey="dunnes" stroke="#0f172a" strokeWidth={3} animationDuration={1000} dot={false} />
        <Line type="natural" dataKey="supervalu" stroke="#b82b35" strokeWidth={3} animationDuration={1000} dot={false} />
        <XAxis dataKey={isoToChartDate}/>
        <YAxis width={40}/>
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  ) : <></>
}

export default PriceHistoryChart
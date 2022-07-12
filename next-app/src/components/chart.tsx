import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Item, PriceRecord } from './Item'

interface PriceHistoryChartProps {
  activeItem: Item
}

function PriceHistoryChart(props: PriceHistoryChartProps): JSX.Element{
  const [prices, setPrices] = useState<null | Item>(null)

  const fetchPrices = useEffect(() => {
    const getPrices = async () => {
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
        const adjustedPrices = item.prices.map((priceRecord: PriceRecord) => {
          let d = new Date(priceRecord.dateTime)
          priceRecord.dateTime = d.toLocaleDateString(undefined, {day: 'numeric', month: 'short', year: '2-digit'})
          return priceRecord
        })
        item.prices = adjustedPrices
        setPrices(item)
      }
    }
    getPrices()
  }, [props.activeItem.id])
  
  console.log({prices})
  return prices ? (
    <ResponsiveContainer aspect={3/2} width="100%" debounce={1}>
      <LineChart data={prices.prices}>
        <Line type="monotone" dataKey="tesco" stroke="#0284c7" />
        <Line type="monotone" dataKey="dunnes" stroke="#0f172a" />
        <Line type="monotone" dataKey="supervalu" stroke="#b82b35" />
        <XAxis dataKey="dateTime"/>
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  ) : <></>
}

export default PriceHistoryChart
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts'
import { ItemProps } from './Item'

interface PriceHistoryChartProps {
  activeItem: ItemProps
}

function PriceHistoryChart(props: PriceHistoryChartProps): JSX.Element{
  const [prices, setPrices] = useState<null | ItemProps>(null)

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
      setPrices(response)
    }
    getPrices()
  }, [])
  
  console.log({prices})
  return prices ? (
    <LineChart>
      <Line type="monotone" dataKey="tesco" stroke="" />
      <XAxis dataKey="date"/>
      <YAxis />
      <Tooltip />
    </LineChart>
  ) : <></>
}

export default PriceHistoryChart
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
      if (response.message === 'Success')
      setPrices(response.item)
    }
    getPrices()
  }, [props.activeItem.id])
  
  console.log({prices})
  return prices ? (
    <LineChart height={400} width={600} data={prices.prices}>
      <Line type="monotone" dataKey="tesco" stroke="#0284c7" />
      <Line type="monotone" dataKey="dunnes" stroke="#0f172a" />
      <Line type="monotone" dataKey="supervalu" stroke="#b82b35" />
      <XAxis dataKey="dateTime"/>
      <YAxis />
      <Tooltip />
    </LineChart>
  ) : <></>
}

export default PriceHistoryChart
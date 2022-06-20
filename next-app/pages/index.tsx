import { useState, useEffect } from 'react'
import styles from  "../styles/UserHome.module.css"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

function UserHome(): JSX.Element {
  const [items, setItems] = useState<null | ItemProps[]>(null)

  const getItems = useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('http://localhost:8080/item-prices')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  console.log(items)

  return (<div className={styles['user-favourites']}>
    <main>
      <h1>Items</h1>
      { items ? items.map(item => (
        <Item   {...item} key={item.id} />
      ))
       :
      <></>
      }
    </main>
  </div>)
}

interface ItemProps {
  name: string,
  id: number,
  urlsId: number,
  prices: [
    {
      dateTime: string,
      id: number,
      itemId: number,
      supervalu: number | null
      tesco: number | null
      dunnes: number | null
    }
  ]
}

function Item(props: ItemProps): JSX.Element {
  return (
  <div className="item">
    <h3>{props.name}</h3>
    <div>
      <span>{"name of store"}</span>
      <span>€ {9.6.toString()}</span>
    </div>
  </div>
  )
}

export default UserHome
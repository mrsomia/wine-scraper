import { useState, useEffect } from 'react'
import styles from  "../styles/UserHome.module.css"
import { ItemProps, Item } from '../components/Item'

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

export default UserHome
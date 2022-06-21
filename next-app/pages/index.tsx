import { useEffect, useReducer } from 'react'
import styles from  "../styles/UserHome.module.css"
import { ItemProps, Item } from '../components/Item'
// import { initialState, stateReducer } from '../utils/context'

interface InitialState {
  user: {
    name: string,
    id: number,
    // favourites: ItemProps[],
  },
  items: null | ItemProps[],
  activeItem: null | ItemProps
}

export const initialState: InitialState = {
  user: {
    name: 'Testy McTest face',
    id: 1,
    // favourites: []
  },
  items: null,
  activeItem: null
}


export function stateReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch(action.type) {
    case 'UPDATE-ITEMS':
      return { ...state, items: action.payload }
    default:
      return state
      throw new Error("bad action type")
  }
}

type ACTIONTYPE = | { type: 'UPDATE-ITEMS', payload: ItemProps[] }

function UserHome(): JSX.Element {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  const getItems = useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('http://localhost:8080/item-prices')
        const data = await res.json()
        dispatch( {type: 'UPDATE-ITEMS', payload: data })
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  console.log(state)

  return (<div className={styles['user-favourites']}>
    <main>
      <h1>Items</h1>
      { state.items ? state.items.map(item => (
        <Item   {...item} key={item.id} />
      ))
       :
      <></>
      }
    </main>
  </div>)
}

export default UserHome
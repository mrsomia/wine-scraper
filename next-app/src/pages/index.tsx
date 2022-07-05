import { useEffect, useReducer } from 'react'
import PriceHistoryChart from '../components/chart'
// import styles from  "../styles/UserHome.module.css"
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
      if (!state.activeItem) {
        return { ...state, items: action.payload, activeItem: action.payload[0]}
      } else {
        return {...state, items: action.payload}
      }
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

  return (<div className='py-4 px-9 flex h-screen bg-slate-100'>
    <main className='grid grid-cols-2'>
      <div>
        <h1 className='font-sans font-bold text-3xl py-3 m-2'>Items</h1>
        <div className='grid grid-cols-1 gap-5'>
          { state.items ? state.items.map(item => (
            <Item   {...item}  active={item.id === state.activeItem?.id} key={item.id} />
          ))
          :
          <></>
          }
        </div>
      </div>
      <div className='mt-11'>
      {state.activeItem && <PriceHistoryChart activeItem={state.activeItem}/>}
      </div>
    </main>
  </div>)
}

export default UserHome
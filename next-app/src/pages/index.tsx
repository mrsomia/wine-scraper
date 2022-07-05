import { useReducer, useEffect, createContext, Dispatch } from 'react'
import PriceHistoryChart from '../components/chart'
import { ItemCard } from '../components/Item'
import { initialState, stateReducer, StateContext, ACTIONTYPE} from '../lib/state-reducer'

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
  const DispatchContext = createContext<Dispatch<ACTIONTYPE>>(dispatch)

  return (
  <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
      <div className='py-4 px-9 flex h-screen bg-slate-100'>
        <main className='grid grid-cols-2'>
          <div>
            <h1 className='font-sans font-bold text-3xl py-3 m-2'>Items</h1>
            <div className='grid grid-cols-1 gap-5'>
              { state.items ? state.items.map(item => (
                <ItemCard  {...item}  active={item.id === state.activeItem?.id} key={item.id}  />
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
      </div>
    </DispatchContext.Provider>
  </StateContext.Provider> 
  )
}

export default UserHome
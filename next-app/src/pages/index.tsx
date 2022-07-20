import { useReducer, useEffect } from 'react'
import Navbar from '../components/navbar'
import { ItemCard } from '../components/Item'
import { initialState, stateReducer, StateContext, DispatchContext} from '../lib/state-reducer'

function UserHome(): JSX.Element {
  
  const [state, dispatch] = useReducer(stateReducer, initialState)

  const getItems = useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('http://127.0.0.1:8080/item-prices')
        const data = await res.json()
        dispatch( {type: 'UPDATE-ITEMS', payload: data })
      } catch (e) {
        console.error(`Failed to fetch items`, e)
      }
    }
    getData()
  }, [])

  return (
  <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
      <Navbar />
      <div className='py-4 px-9 flex h-screen bg-slate-100 justify-center'>
        <main className=''>
          <h1 className='font-sans font-bold text-3xl py-3 m-2'>Items</h1>
          <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            { state.items ? state.items.map(item => (
              <ItemCard  {...item}  active={item.id === state.activeItem?.id} key={item.id}  />
            ))
            :
            <></>
            }
          </div>
        </main>
      </div>
    </DispatchContext.Provider>
  </StateContext.Provider> 
  )
}

export default UserHome
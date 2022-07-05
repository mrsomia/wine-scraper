import { createContext, Dispatch } from 'react'
import { Item } from "../components/Item";

export interface InitialState {
  user: {
    name: string,
    id: number,
    // favourites: Item[],
  },
  items: null | Item[],
  activeItem: null | Item
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

export type ACTIONTYPE = | { type: 'UPDATE-ITEMS', payload: Item[] }

export const StateContext = createContext(initialState)
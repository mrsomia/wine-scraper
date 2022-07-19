import { expect, test, describe, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { ItemCard } from '../src/components/Item'
import { DispatchContext } from '../src/lib/state-reducer'
import React from 'react'

const mockItemRecord = {
  active: false,
  name: '19 Crimes',
  id: 4,
  urlsId: 4,
  prices: [
    {
      dateTime: '2022-07-18T21:48:42.942Z',
      id: 3,
      itemId: 4,
      supervalu: null,
      tesco: 12,
      dunnes: 9.6,
    }
  ]
}

const dispathMocked = vi.fn()

describe('Item component', () => {
  afterEach(cleanup)

  test('should render', () => {
    render(<ItemCard  {...mockItemRecord} />)

    expect(screen.getByText('19 Crimes')).toBeDefined()
  })
  
  test('should render cheapest price', () => {
    render(<ItemCard  {...mockItemRecord} />)

    expect(screen.getByText('€ 9.60')).toBeDefined()
    expect(screen.getByText('dunnes')).toBeDefined()
    expect(screen.queryByText('tesco')).toBeNull()
    expect(screen.queryByText('supervalu')).toBeNull()
  })

  test('should call dispatch', () => {
    render(
      <DispatchContext.Provider value={dispathMocked}>
        <ItemCard  {...mockItemRecord} />
      </DispatchContext.Provider>
    )

    fireEvent.click(screen.getByRole('heading'))
    expect(dispathMocked).toHaveBeenCalledOnce()
    expect(dispathMocked).toHaveBeenCalledWith({ type: 'UPDATE-ACTIVE', payload: mockItemRecord})
  })
  
})

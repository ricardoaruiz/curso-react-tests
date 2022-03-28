import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserList } from '.'
import { User } from './types'

const users: User[] = [
  { id: 10, name: 'John Snow' },
  { id: 20, name: 'Aria Stark' },
  { id: 30, name: 'Tiryon Lenyster' },
]

describe('<UserList />', () => {
  it('should be render correctly with data', () => {
    render(<UserList users={users} onUserSelect={jest.fn()} />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)

    const userNames = items.map((item) => item.textContent)
    expect(userNames).toEqual([
      'JSJohn Snow',
      'ASAria Stark',
      'TLTiryon Lenyster',
    ])
  })

  it('should be render correctly with no data', () => {
    render(<UserList users={[]} onUserSelect={jest.fn()} />)

    const items = screen.queryByRole('listitem')
    expect(items).not.toBeInTheDocument()
    expect(screen.getByText(/no users connected/i)).toBeInTheDocument()
  })

  it('should be call userSelect callback when an item is clicked', () => {
    const mockedOnUserSelect = jest.fn()
    render(<UserList users={users} onUserSelect={mockedOnUserSelect} />)

    const items = screen.getAllByRole('listitem')
    userEvent.click(items[0])
    expect(mockedOnUserSelect).toHaveBeenCalledTimes(1)
    expect(mockedOnUserSelect).toHaveBeenCalledWith(10)
  })
})

import React from 'react'
import { render, screen, act } from '@testing-library/react'
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
    render(
      <UserList users={users} onUserSelect={jest.fn()} onAddUser={jest.fn()} />
    )

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
    render(
      <UserList users={[]} onUserSelect={jest.fn()} onAddUser={jest.fn()} />
    )

    const items = screen.queryByRole('listitem')
    expect(items).not.toBeInTheDocument()
    expect(screen.getByText(/no users connected/i)).toBeInTheDocument()
  })

  it('should be call userSelect callback when an item is clicked', () => {
    const mockedOnUserSelect = jest.fn()
    render(
      <UserList
        users={users}
        onUserSelect={mockedOnUserSelect}
        onAddUser={jest.fn()}
      />
    )

    const items = screen.getAllByRole('listitem')
    userEvent.click(items[0])
    expect(mockedOnUserSelect).toHaveBeenCalledTimes(1)
    expect(mockedOnUserSelect).toHaveBeenCalledWith(10)
  })

  it('should be call addUser callback when "Add user" button is clicked and user field was informed', async () => {
    const mockedonAddUser = jest.fn()
    render(
      <UserList
        users={users}
        onUserSelect={jest.fn()}
        onAddUser={mockedonAddUser}
      />
    )

    const addButton = screen.getByRole('button', { name: /add user/i })
    expect(addButton).toBeInTheDocument()
    expect(addButton).toBeDisabled()

    const input = screen.getByPlaceholderText(/type user name/i)
    expect(input).toBeInTheDocument()

    await act(async () => {
      userEvent.clear(input)
      userEvent.type(input, 'Aria Stark')
      userEvent.tab()
    })

    expect(addButton).toBeEnabled()

    await act(async () => {
      userEvent.click(addButton)
    })

    expect(mockedonAddUser).toHaveBeenCalledTimes(1)
    expect(mockedonAddUser).toHaveBeenCalledWith('Aria Stark')
    expect(input).toHaveTextContent('')
  })

  it('should not be call addUser callback when "Add user" button is clicked and user field is empty', async () => {
    const mockedonAddUser = jest.fn()
    render(
      <UserList
        users={users}
        onUserSelect={jest.fn()}
        onAddUser={mockedonAddUser}
      />
    )

    const addButton = screen.getByRole('button', { name: /add user/i })
    expect(addButton).toBeInTheDocument()
    expect(addButton).toBeDisabled()

    await act(async () => {
      userEvent.click(addButton)
    })

    expect(mockedonAddUser).not.toHaveBeenCalled()
  })
})

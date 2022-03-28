import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserItem } from '.'

describe('<UserItem />', () => {
  it('should be render correctly with first name', () => {
    render(<UserItem id={22} name="John" onClick={jest.fn()} />)
    expect(screen.getByText(/jo$/i)).toBeInTheDocument()
    expect(screen.getByText(/john$/i)).toBeInTheDocument()
  })

  it('should be render correctly with first name 1 character lenght', () => {
    render(<UserItem id={22} name="J" onClick={jest.fn()} />)
    expect(screen.getAllByText(/j$/i)).toHaveLength(2)
  })

  it('should be render correctly with first name 2 character lenght', () => {
    render(<UserItem id={22} name="Jr" onClick={jest.fn()} />)
    expect(screen.getAllByText(/jr$/i)).toHaveLength(2)
  })

  it('should be render correctly with first name and second name', () => {
    render(<UserItem id={22} name="John Smith" onClick={jest.fn()} />)
    expect(screen.getByText(/js/i)).toBeInTheDocument()
    expect(screen.getByText(/john smith/i)).toBeInTheDocument()
  })

  it('should be call callback click when card is clicked', () => {
    const mockedOnClick = jest.fn()
    render(<UserItem id={22} name="John Smith" onClick={mockedOnClick} />)

    const card = screen.getByRole('listitem', { name: /john smith/i })
    userEvent.click(card)
    expect(mockedOnClick).toHaveBeenCalledTimes(1)
    expect(mockedOnClick).toHaveBeenCalledWith(22)
  })
})

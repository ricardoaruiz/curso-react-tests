/* eslint-disable testing-library/no-node-access */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ChatRoom } from '.'
import { LoggedUser } from '../Messages/types'

const loggedUser: LoggedUser = { id: 10, name: 'John Snow' }

describe('<ChatRoom />', () => {
  it('should be render with send messages and logged users', () => {
    render(<ChatRoom loggedUser={loggedUser} />)

    const userList = screen.getByRole('list', { name: /chat users/i })
    expect(userList).toBeInTheDocument()
    const users = userList.children
    expect(users).toHaveLength(3)

    const messageList = screen.getByRole('list', { name: /chat messages/i })
    expect(messageList).toBeInTheDocument()
    const messages = messageList.children
    expect(messages).toHaveLength(6)
  })

  it('should be add new user on user list', () => {
    render(<ChatRoom loggedUser={loggedUser} />)

    const userList = screen.getByRole('list', { name: /chat users/i })
    expect(userList).toBeInTheDocument()
    const users = userList.children
    expect(users).toHaveLength(3)

    const newUserInput = screen.getByPlaceholderText(/Type user name/i)
    expect(newUserInput).toBeInTheDocument()

    const addUserButton = screen.getByRole('button', { name: /add user/i })
    expect(addUserButton).toBeInTheDocument()

    userEvent.clear(newUserInput)
    userEvent.type(newUserInput, 'Bruce Benner')
    userEvent.click(addUserButton)
    expect(users).toHaveLength(4)
  })

  it('should be send new message', () => {
    render(<ChatRoom loggedUser={loggedUser} />)

    const messageList = screen.getByRole('list', { name: /chat messages/i })
    expect(messageList).toBeInTheDocument()
    const messages = messageList.children
    expect(messages).toHaveLength(6)

    const inputMessage = screen.getByPlaceholderText(/type your message here/i)
    userEvent.clear(inputMessage)
    userEvent.type(inputMessage, 'New message has been send')

    const sendMessageButton = screen.getByRole('button', {
      name: /send message/i,
    })
    userEvent.click(sendMessageButton)
    expect(messages).toHaveLength(7)
  })
})

/* eslint-disable testing-library/no-node-access */
import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ChatRoom } from '.'
import { LoggedUser } from '../Messages/types'

const loggedUser: LoggedUser = { id: 10, name: 'John Snow' }

describe('<ChatRoom />', () => {
  it('should be render with send messages and logged users', async () => {
    render(<ChatRoom loggedUser={loggedUser} />)

    const userList = await screen.findByRole('list', { name: /chat users/i })
    expect(userList).toBeInTheDocument()
    const users = userList.children
    expect(users).toHaveLength(3)

    const messageList = await screen.findByRole('list', {
      name: /chat messages/i,
    })
    expect(messageList).toBeInTheDocument()
    const messages = messageList.children
    expect(messages).toHaveLength(6)
  })

  it('should be add new user on user list', async () => {
    render(<ChatRoom loggedUser={loggedUser} />)

    const userList = await screen.findByRole('list', { name: /chat users/i })
    expect(userList).toBeInTheDocument()
    const users = userList.children
    expect(users).toHaveLength(3)

    const newUserInput = screen.getByPlaceholderText(/Type user name/i)
    expect(newUserInput).toBeInTheDocument()

    const addUserButton = screen.getByRole('button', { name: /add user/i })
    expect(addUserButton).toBeInTheDocument()
    expect(addUserButton).toBeDisabled()

    await act(async () => {
      userEvent.clear(newUserInput)
      userEvent.type(newUserInput, 'Bruce Benner')
      userEvent.tab()
    })

    expect(addUserButton).toBeEnabled()

    await act(async () => {
      userEvent.click(addUserButton)
    })

    await waitFor(() => {
      const users = userList.children
      expect(users).toHaveLength(4)
    })
  })

  it('should be send new message', async () => {
    render(<ChatRoom loggedUser={loggedUser} />)

    const messageList = await screen.findByRole('list', {
      name: /chat messages/i,
    })
    expect(messageList).toBeInTheDocument()

    await waitFor(() => {
      const messages = messageList.children
      expect(messages).toHaveLength(6)
      return messages
    })

    const sendMessageButton = screen.getByRole('button', {
      name: /send message/i,
    })
    expect(sendMessageButton).toBeInTheDocument()
    expect(sendMessageButton).toBeDisabled()

    const inputMessage = screen.getByPlaceholderText(/type your message here/i)

    await act(async () => {
      userEvent.clear(inputMessage)
      userEvent.type(inputMessage, 'New message has been send')
      userEvent.tab()
    })

    expect(sendMessageButton).toBeEnabled()

    await act(async () => {
      userEvent.click(sendMessageButton)
    })
    await waitFor(() => {
      const messages = messageList.children
      expect(messages).toHaveLength(7)
      return messages
    })
  })
})

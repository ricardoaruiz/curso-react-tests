import React from 'react'
import { render, screen } from '@testing-library/react'

import { Messages } from '.'
import { LoggedUser, Message } from './types'
import userEvent from '@testing-library/user-event'

const loggedUser: LoggedUser = { id: 10, name: 'John Snow' }

const items: Message[] = [
  {
    id: 1,
    from: { id: 10, name: 'John Snow' },
    text: 'This is a message from user with id 10',
  },
  {
    id: 2,
    from: { id: 10, name: 'John Snow' },
    text: 'This is other message from user with id 10',
  },
  {
    id: 3,
    from: { id: 20, name: 'Aria Stark' },
    text: 'This is a message from user with id 20',
  },
  {
    id: 4,
    from: { id: 30, name: 'Tiryon Lenyster' },
    text: 'This is a message from user with id 30',
  },
  {
    id: 5,
    from: { id: 20, name: 'Aria Stark' },
    text: 'This is other message from user with id 20',
  },
  {
    id: 6,
    from: { id: 20, name: 'Aria Stark' },
    text: 'This is other message from user with id 20',
  },
]

describe('<Messages />', () => {
  it('should be render correctly with send messages', () => {
    render(
      <Messages
        loggedUser={loggedUser}
        items={items}
        onSendMessage={jest.fn()}
      />
    )

    const messages = screen.queryAllByRole('listitem')
    expect(messages).toHaveLength(6)

    const messagesText = messages.map((message) => message.textContent)
    expect(messagesText).toEqual([
      'John Snow: This is a message from user with id 10',
      'John Snow: This is other message from user with id 10',
      'Aria Stark: This is a message from user with id 20',
      'Tiryon Lenyster: This is a message from user with id 30',
      'Aria Stark: This is other message from user with id 20',
      'Aria Stark: This is other message from user with id 20',
    ])
  })

  it('should be render correctly with no send messages', () => {
    render(
      <Messages loggedUser={loggedUser} items={[]} onSendMessage={jest.fn()} />
    )

    const messages = screen.queryByRole('listitem')
    expect(messages).not.toBeInTheDocument()
  })

  it('should be call onSendMessage callback when "Send Message" button is clicked and message field not is empty', () => {
    const mockedOnSendMessage = jest.fn()
    render(
      <Messages
        loggedUser={loggedUser}
        items={items}
        onSendMessage={mockedOnSendMessage}
      />
    )

    const sendMessageButton = screen.getByRole('button', {
      name: /send message/i,
    })
    expect(sendMessageButton).toBeInTheDocument()

    const inputMessage = screen.getByPlaceholderText(/type your message here/i)
    expect(inputMessage).toBeInTheDocument()
    userEvent.clear(inputMessage)
    userEvent.type(inputMessage, 'This is a new message from user id 10')

    userEvent.click(sendMessageButton)
    expect(mockedOnSendMessage).toHaveBeenCalledTimes(1)
    expect(mockedOnSendMessage).toHaveBeenCalledWith({
      id: 7,
      from: { id: 10, name: 'John Snow' },
      text: 'This is a new message from user id 10',
    })
    expect(inputMessage).toHaveValue('')
  })

  it('should not be call onSendMessage callback when "Send Message" button is clicked and message field is empty', () => {
    const mockedOnSendMessage = jest.fn()
    render(
      <Messages
        loggedUser={loggedUser}
        items={items}
        onSendMessage={mockedOnSendMessage}
      />
    )

    const sendMessageButton = screen.getByRole('button', {
      name: /send message/i,
    })
    expect(sendMessageButton).toBeInTheDocument()

    userEvent.click(sendMessageButton)
    expect(mockedOnSendMessage).not.toHaveBeenCalled()
  })
})

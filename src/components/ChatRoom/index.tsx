import React from 'react'

import { ChatRoomProps } from './types'
import { UserList } from '../UserList'
import { User } from '../UserList/types'
import { Message } from '../Messages/types'
import { Messages } from '../Messages'

import * as S from './styles'

const users: User[] = [
  { id: 10, name: 'John Snow' },
  { id: 20, name: 'Aria Stark' },
  { id: 30, name: 'Tiryon Lenyster' },
]

const messages: Message[] = [
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

export const ChatRoom: React.VFC<ChatRoomProps> = ({ loggedUser }) => {
  const [inChatUsers, setInChatUsers] = React.useState<User[]>(users)
  const [inChatMessages, setInChatMessages] =
    React.useState<Message[]>(messages)

  const handleSendMessage = React.useCallback((message: Message) => {
    setInChatMessages((state) => {
      return [
        ...state,
        {
          id: message.id,
          from: message.from,
          text: message.text,
        },
      ]
    })
  }, [])

  const handleAddUser = React.useCallback((name: string) => {
    setInChatUsers((state) => {
      const nextId = state.length ? state[state.length - 1].id + 10 : 10
      return [
        ...state,
        {
          id: nextId,
          name,
        },
      ]
    })
  }, [])

  return (
    <S.Wrapper>
      <Messages
        items={inChatMessages}
        loggedUser={loggedUser}
        onSendMessage={handleSendMessage}
      />
      <UserList users={inChatUsers} onAddUser={handleAddUser} />
    </S.Wrapper>
  )
}

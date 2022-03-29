import React from 'react'
import axios from 'axios'

import { ChatRoomProps } from './types'
import { UserList } from '../UserList'
import { User } from '../UserList/types'
import { Message } from '../Messages/types'
import { Messages } from '../Messages'

import * as S from './styles'

export const ChatRoom: React.VFC<ChatRoomProps> = ({ loggedUser }) => {
  const [inChatUsers, setInChatUsers] = React.useState<User[]>([])
  const [inChatMessages, setInChatMessages] = React.useState<Message[]>([])

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

  const handleAddUser = React.useCallback(async (name: string) => {
    setInChatUsers((state) => {
      const nextId = state.length ? state[state.length - 1].id + 10 : 10

      const newUser = {
        id: nextId,
        name,
      }

      return [...state, { ...newUser }]
    })
  }, [])

  React.useEffect(() => {
    const loadInChatUsers = async () => {
      const response = await axios.get<User[]>('http://localhost:9000/users')
      setInChatUsers(response.data)
    }

    const loadInChatMessages = async () => {
      const response = await axios.get<Message[]>(
        'http://localhost:9000/messages'
      )
      setInChatMessages(response.data)
    }

    loadInChatUsers()
    loadInChatMessages()
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

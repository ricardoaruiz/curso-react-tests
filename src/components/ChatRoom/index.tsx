import React from 'react'
import axios from 'axios'

import { ChatRoomProps } from './types'
import { UserList } from '../UserList'
import { User } from '../UserList/types'
import { Message } from '../Messages/types'
import { Messages } from '../Messages'

import * as S from './styles'

const BACKEND_BASE_URL = 'http://localhost:9000'

export const ChatRoom: React.VFC<ChatRoomProps> = ({ loggedUser }) => {
  const [inChatUsers, setInChatUsers] = React.useState<User[]>([])
  const [inChatMessages, setInChatMessages] = React.useState<Message[]>([])

  const handleSendMessage = React.useCallback(async (message: Message) => {
    try {
      const newMessage = {
        id: message.id,
        from: message.from,
        text: message.text,
      }

      await axios.post(`${BACKEND_BASE_URL}/messages`, newMessage)

      setInChatMessages((state) => {
        return [
          ...state,
          {
            ...newMessage,
          },
        ]
      })
    } catch (error) {
      // TODO must handle error
      console.error(error)
    }
  }, [])

  const handleAddUser = React.useCallback(
    async (name: string) => {
      const nextId = inChatUsers.length
        ? inChatUsers[inChatUsers.length - 1].id + 10
        : 10

      const newUser = {
        id: nextId,
        name,
      }

      try {
        await axios.post(`${BACKEND_BASE_URL}/users`, newUser)
        setInChatUsers([...inChatUsers, { ...newUser }])
      } catch (error) {
        //TODO must handle error
        console.error(error)
      }
    },
    [inChatUsers]
  )

  React.useEffect(() => {
    const loadInChatUsers = async () => {
      const response = await axios.get<User[]>(`${BACKEND_BASE_URL}/users`)
      setInChatUsers(response.data)
    }

    const loadInChatMessages = async () => {
      const response = await axios.get<Message[]>(
        `${BACKEND_BASE_URL}/messages`
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

import React from 'react'

import { ChatRoomProps } from './types'
import { UserList } from '../UserList'
import { User } from '../UserList/types'
import { Message } from '../Messages/types'
import { Messages } from '../Messages'
import { useUser } from '../../services/useUser'
import { useMessage } from '../../services/useMessage'

import * as S from './styles'

export const ChatRoom: React.VFC<ChatRoomProps> = ({ loggedUser }) => {
  const { getInChatUsers, addInChatUser } = useUser()
  const { getInChatMessages, addInChatMessage } = useMessage()

  const [inChatUsers, setInChatUsers] = React.useState<User[]>([])
  const [inChatMessages, setInChatMessages] = React.useState<Message[]>([])

  const handleSendMessage = React.useCallback(
    async (message: Message) => {
      try {
        const newMessage = {
          id: message.id,
          from: message.from,
          text: message.text,
        }

        await addInChatMessage(newMessage)

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
        console.error('ChatRoom.handleSendMessage', error)
      }
    },
    [addInChatMessage]
  )

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
        await addInChatUser(newUser)
        setInChatUsers([...inChatUsers, { ...newUser }])
      } catch (error) {
        //TODO must handle error
        console.error('ChatRoom.handleAddUser', error)
      }
    },
    [addInChatUser, inChatUsers]
  )

  React.useEffect(() => {
    const loadInChatUsers = async () => {
      const inChatUsers = await getInChatUsers()
      setInChatUsers(inChatUsers)
    }

    const loadInChatMessages = async () => {
      const inChatMessages = await getInChatMessages()
      setInChatMessages(inChatMessages)
    }

    loadInChatUsers()
    loadInChatMessages()
  }, [getInChatMessages, getInChatUsers])

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

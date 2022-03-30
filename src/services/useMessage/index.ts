import React from 'react'

import { useApi } from '../useApi'
import { Message, UseMessage } from './types'

const MESSAGE_URI = '/messages'

export const useMessage = (): UseMessage => {
  const { get, post } = useApi()

  /**
   * Get all users from in a chat
   * @returns Promise<User>
   */
  const getInChatMessages = React.useCallback(async () => {
    const messages = await get<Message[]>(MESSAGE_URI)
    return messages
  }, [get])

  /**
   * Add new message in a chat
   * @param: Message object that will be add
   * @returns: Promise<void>
   */
  const addInChatMessage = React.useCallback(
    async (message: Message) => {
      return await post<void, Message>(MESSAGE_URI, message)
    },
    [post]
  )

  return { getInChatMessages, addInChatMessage }
}

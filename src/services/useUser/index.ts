import React from 'react'

import { useApi } from '../useApi'
import { User, UseUser } from './types'

const USER_URI = '/users'

export const useUser = (): UseUser => {
  const { get, post } = useApi()

  /**
   * Get all users from in a chat
   * @returns Promise<User>
   */
  const getInChatUsers = React.useCallback(async () => {
    const users = await get<User[]>(USER_URI)
    return users
  }, [get])

  /**
   * Add new user in a chat
   * @param: User object that will be add
   * @returns: Promise<void>
   */
  const addInChatUser = React.useCallback(
    async (user: User) => {
      return await post<void, typeof user>(USER_URI, user)
    },
    [post]
  )

  return { getInChatUsers, addInChatUser }
}

export type UseUser = {
  /**
   * Get all users from in a chat
   * @returns Promise<User>
   */
  getInChatUsers: () => Promise<User[]>

  /**
   * Add new user in a chat
   * @param: User object that will be add
   * @returns: Promise<void>
   */
  addInChatUser: (user: User) => Promise<void>
}

export type User = {
  id: number
  name: string
}

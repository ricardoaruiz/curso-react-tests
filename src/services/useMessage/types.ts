import { User } from '../useUser/types'

export type UseMessage = {
  /**
   * Get all messages from in a chat
   * @returns Promise<Message>
   */
  getInChatMessages: () => Promise<Message[]>

  /**
   * Add new message in a chat
   * @param: Message object that will be add
   * @returns: Promise<void>
   */
  addInChatMessage: (message: Message) => Promise<void>
}

export type Message = {
  id: number
  from: User
  text: string
}

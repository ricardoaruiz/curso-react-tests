export type MessagesProps = {
  loggedUser: LoggedUser
  items: Message[]
  onSendMessage: (message: Message) => void
}

export type Message = {
  id: number
  from: LoggedUser
  text: string
}

export type LoggedUser = {
  id: number
  name: string
}

export type FormData = {
  message: string
}

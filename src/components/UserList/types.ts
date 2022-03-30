export type UserListProps = {
  users: User[]
  onUserSelect?: (id: number) => void
  onAddUser: (name: string) => void
}

export type User = {
  id: number
  name: string
}

export type FormData = Omit<User, 'id'>

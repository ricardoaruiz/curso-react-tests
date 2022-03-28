export type UserListProps = {
  users: User[]
  onUserSelect: (id: number) => void
}

export type User = {
  id: number
  name: string
}

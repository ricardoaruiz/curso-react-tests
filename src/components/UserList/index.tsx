import React from 'react'

import { UserItem } from '../UserItem'
import { UserListProps } from './types'
import { Button } from '../Button'

import * as S from './styles'

export const UserList: React.VFC<UserListProps> = ({
  users,
  onUserSelect,
  onAddUser,
}) => {
  const [newUser, setNewUser] = React.useState('')

  const handleNewUserInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewUser(event.target.value)
    },
    []
  )

  const handleAddButtonClick = React.useCallback(() => {
    onAddUser(newUser)
    setNewUser('')
  }, [newUser, onAddUser])

  return (
    <S.Wrapper>
      {users.length && (
        <>
          <S.List>
            {users.map(({ id, name }) => (
              <UserItem key={id} id={id} name={name} onClick={onUserSelect} />
            ))}
          </S.List>

          <S.Controls>
            <S.NewUserInput
              type="text"
              name="newUser"
              id="newUser"
              placeholder="Type user name"
              value={newUser}
              onChange={handleNewUserInputChange}
            />
            <Button onClick={handleAddButtonClick} disabled={!newUser}>
              Add user
            </Button>
          </S.Controls>
        </>
      )}
      {!users.length && <p>No users connected</p>}
    </S.Wrapper>
  )
}

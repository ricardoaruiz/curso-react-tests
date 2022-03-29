import React from 'react'

import { UserItem } from '../UserItem'
import { UserListProps } from './types'
import { Button } from '../Button'

import * as S from './styles'

const UserList: React.VFC<UserListProps> = ({
  users,
  onUserSelect,
  onAddUser,
}) => {
  const newUserInputRef = React.useRef<HTMLInputElement | null>(null)

  const handleAddButtonClick = React.useCallback(() => {
    if (!newUserInputRef.current?.value) return
    onAddUser(newUserInputRef.current.value)
    newUserInputRef.current.value = ''
  }, [onAddUser])

  return (
    <S.Wrapper>
      {users.length && (
        <>
          <S.List aria-label="chat users">
            {users.map(({ id, name }) => (
              <UserItem
                key={id}
                id={id}
                name={name}
                onClick={() => onUserSelect && onUserSelect(id)}
              />
            ))}
          </S.List>

          <S.Controls>
            <S.NewUserInput
              type="text"
              name="newUser"
              id="newUser"
              placeholder="Type user name"
              ref={newUserInputRef}
            />
            <Button onClick={handleAddButtonClick}>Add user</Button>
          </S.Controls>
        </>
      )}
      {!users.length && <p>No users connected</p>}
    </S.Wrapper>
  )
}

const MemoizedUserList = React.memo(UserList)
export { MemoizedUserList as UserList }

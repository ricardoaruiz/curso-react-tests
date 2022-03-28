import React from 'react'

import { UserItem } from '../UserItem'
import { UserListProps } from './types'

import * as S from './styles'

export const UserList: React.VFC<UserListProps> = ({ users, onUserSelect }) => {
  return (
    <S.Wrapper>
      {users.length && (
        <S.List>
          {users.map(({ id, name }) => (
            <UserItem key={id} id={id} name={name} onClick={onUserSelect} />
          ))}
        </S.List>
      )}
      {!users.length && <p>No users connected</p>}
    </S.Wrapper>
  )
}

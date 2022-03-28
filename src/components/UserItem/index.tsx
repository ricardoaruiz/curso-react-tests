import React from 'react'
import { UserItemProps } from './types'

import * as S from './styles'

const UserItem: React.VFC<UserItemProps> = ({ id, name, onClick }) => {
  const initials = React.useMemo(() => {
    const arrName = name.split(' ')

    if (arrName.length === 1) {
      if (name.length === 1) {
        return name.toLocaleUpperCase()
      }
      return name.slice(0, 2).toUpperCase()
    }

    return `${arrName[0].charAt(0).toLocaleUpperCase()}${arrName[1]
      .charAt(0)
      .toLocaleUpperCase()}`
  }, [name])

  const handleCardClick = React.useCallback(() => {
    onClick(id)
  }, [id, onClick])

  return (
    <S.Wrapper role="listitem" aria-label={name} onClick={handleCardClick}>
      <S.Initials>{initials}</S.Initials>
      <S.Name>{name}</S.Name>
    </S.Wrapper>
  )
}

const MemoizedUserItem = React.memo(UserItem)
export { MemoizedUserItem as UserItem }

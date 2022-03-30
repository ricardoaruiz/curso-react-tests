import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UserItem } from '../UserItem'
import { UserListProps, FormData } from './types'
import { Button } from '../Button'

import * as S from './styles'

const schema = yup
  .object({
    name: yup.string().required('User name is required'),
  })
  .required()

const UserList: React.VFC<UserListProps> = ({
  users,
  onUserSelect,
  onAddUser,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = React.useCallback(
    ({ name }) => {
      if (!name) return
      onAddUser(name)
      setValue('name', '')
    },
    [onAddUser, setValue]
  )

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

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.NewUserInput
              type="text"
              placeholder="Type user name"
              autoComplete="off"
              {...register('name')}
            />

            <Button type="submit" disabled={!isDirty || !isValid}>
              Add user
            </Button>
          </S.Form>
        </>
      )}
      {!users.length && <p>No users connected</p>}
    </S.Wrapper>
  )
}

const MemoizedUserList = React.memo(UserList)
export { MemoizedUserList as UserList }

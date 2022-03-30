import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { MessagesProps, FormData } from './types'
import { Button } from '../Button'

import * as S from './styles'

const schema = yup
  .object({
    message: yup.string().required('Message is required'),
  })
  .required()

const Messages: React.VFC<MessagesProps> = ({
  loggedUser,
  items,
  onSendMessage,
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

  const nextMessageId = React.useMemo(() => {
    return !items.length ? 1 : items[items.length - 1].id + 1
  }, [items])

  const onSubmit: SubmitHandler<FormData> = React.useCallback(
    ({ message }) => {
      if (!message) return
      onSendMessage({
        id: nextMessageId,
        from: loggedUser,
        text: message,
      })
      setValue('message', '')
    },
    [loggedUser, nextMessageId, onSendMessage, setValue]
  )

  return (
    <S.Wrapper>
      <S.Messages aria-label="chat messages">
        {items.map(({ id, from, text }) => (
          <S.Message
            key={id}
            isMine={from.id === loggedUser.id}
          >{`${from.name}: ${text}`}</S.Message>
        ))}
      </S.Messages>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputMessage
          type="text"
          placeholder="Type your message here"
          autoComplete="off"
          {...register('message')}
        />
        <Button type="submit" disabled={!isDirty || !isValid}>
          Send Message
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}

const MemoizedMessages = React.memo(Messages)
export { MemoizedMessages as Messages }

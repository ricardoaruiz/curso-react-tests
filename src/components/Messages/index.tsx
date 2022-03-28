import React from 'react'
import { MessagesProps } from './types'
import { Button } from '../Button'

import * as S from './styles'

export const Messages: React.VFC<MessagesProps> = ({
  loggedUser,
  items,
  onSendMessage,
}) => {
  const [message, setMessage] = React.useState('')

  const handleInputMessageChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value)
    },
    []
  )

  const nextMessageId = React.useMemo(() => {
    return !items.length ? 1 : items[items.length - 1].id + 1
  }, [items])

  const handleSendMessageButtonClick = React.useCallback(() => {
    onSendMessage({
      id: nextMessageId,
      from: loggedUser,
      text: message,
    })
    setMessage('')
  }, [loggedUser, message, nextMessageId, onSendMessage])

  return (
    <S.Wrapper>
      <S.Messages>
        {items.map(({ id, from, text }) => (
          <S.Message
            key={id}
            isMine={from.id === loggedUser.id}
          >{`${from.name}: ${text}`}</S.Message>
        ))}
      </S.Messages>

      <S.Controls>
        <S.InputMessage
          type="text"
          name="message"
          id="message"
          placeholder="Type your message here"
          value={message}
          onChange={handleInputMessageChange}
        />
        <Button disabled={!message} onClick={handleSendMessageButtonClick}>
          Send Message
        </Button>
      </S.Controls>
    </S.Wrapper>
  )
}

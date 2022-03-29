import React from 'react'
import { MessagesProps } from './types'
import { Button } from '../Button'

import * as S from './styles'

const Messages: React.VFC<MessagesProps> = ({
  loggedUser,
  items,
  onSendMessage,
}) => {
  const inputNewMessageRef = React.useRef<HTMLInputElement | null>(null)

  const nextMessageId = React.useMemo(() => {
    return !items.length ? 1 : items[items.length - 1].id + 1
  }, [items])

  const handleSendMessageButtonClick = React.useCallback(() => {
    if (!inputNewMessageRef.current?.value) return

    onSendMessage({
      id: nextMessageId,
      from: loggedUser,
      text: inputNewMessageRef.current.value,
    })
    inputNewMessageRef.current.value = ''
  }, [loggedUser, nextMessageId, onSendMessage])

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

      <S.Controls>
        <S.InputMessage
          type="text"
          name="message"
          id="message"
          placeholder="Type your message here"
          ref={inputNewMessageRef}
        />
        <Button onClick={handleSendMessageButtonClick}>Send Message</Button>
      </S.Controls>
    </S.Wrapper>
  )
}

const MemoizedMessages = React.memo(Messages)
export { MemoizedMessages as Messages }

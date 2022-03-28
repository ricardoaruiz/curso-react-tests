import styled from 'styled-components'

export const Wrapper = styled.div``

export const Messages = styled.ul`
  display: flex;
  flex-direction: column;

  max-height: 400px;
  overflow-y: auto;
  border: 1px solid black;
  padding: 1rem;
  list-style: none;
`

type MessageProps = {
  isMine: boolean
}

export const Message = styled.li<MessageProps>`
  padding: 1rem;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
  width: 60%;
  border-radius: 4px;
  align-self: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};

  & + li {
    margin-top: 20px;
  }
`

export const Controls = styled.div`
  display: flex;
  margin-top: 10px;
`

export const InputMessage = styled.input`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 0.5rem;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-right: 0.5rem;
  flex: 1;
`

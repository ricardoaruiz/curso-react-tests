import styled from 'styled-components'

export const Wrapper = styled.div``

export const Messages = styled.ul`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 100px);
  overflow-y: scroll;
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

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const InputMessage = styled.input`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-right: 0.5rem;
  flex: 1;
  margin-right: 8px;

  @media screen and (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  list-style: none;
`

export const List = styled.ul`
  height: calc(100vh - 100px);
  overflow-y: scroll;
  list-style: none;
  padding: 1rem;
  border: 1px solid black;
`
export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const NewUserInput = styled.input`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid lightgray;
  flex: 1;
  width: 100%;
  margin-right: 8px;

  @media screen and (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`

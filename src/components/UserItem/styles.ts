import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  cursor: pointer;
`

export const Initials = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gray;
  color: #fff;
  margin-right: 16px;
`

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`

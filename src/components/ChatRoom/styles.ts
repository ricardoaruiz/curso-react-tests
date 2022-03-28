import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: [messages] auto [users] minmax(200px, 500px);
  column-gap: 20px;
  padding: 20px;
`

import React from 'react'

import { ChatRoom } from './components/ChatRoom'
import { LoggedUser } from './components/Messages/types'

const loggedUser: LoggedUser = { id: 10, name: 'John Snow' }

export const App: React.FC = () => {
  return (
    <>
      <ChatRoom loggedUser={loggedUser} />
    </>
  )
}

export default App

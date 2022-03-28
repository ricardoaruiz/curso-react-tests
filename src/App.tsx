import React from 'react'

import reactLogo, { ReactComponent as ReactLogo } from 'assets/images/react.svg'
import { Button } from './components/Button'
import { UserList } from './components/UserList'
import { User } from './components/UserList/types'

const users: User[] = [
  { id: 10, name: 'John Snow' },
  { id: 20, name: 'Aria Stark' },
  { id: 30, name: 'Tiryon Lenyster' },
]

export const App: React.FC = () => {
  return (
    <>
      <h1>Wellcome to React with webpack</h1>

      <img
        src={reactLogo}
        alt="React Logo Url mode SVG"
        style={{ width: '150px' }}
      />
      <ReactLogo
        aria-label="React Logo Component mode SVG"
        role="img"
        style={{ width: '150px' }}
      />

      <Button>Success Button</Button>
      <Button disabled>Success Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="danger" disabled>
        Danger Button
      </Button>
      <Button variant="warning">Warning Button</Button>
      <Button variant="warning" disabled>
        Warning Button
      </Button>

      <UserList
        users={users}
        onUserSelect={(id) => console.log(`User selected id ${id}`)}
        onAddUser={(name) => console.log(`The new user is: ${name}`)}
      />
    </>
  )
}

export default App

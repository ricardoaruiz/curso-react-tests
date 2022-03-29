import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should be render correctly', async () => {
    render(<App />)

    const userList = await screen.findByRole('list', { name: /chat users/i })
    expect(userList).toBeInTheDocument()

    const messageList = await screen.findByRole('list', {
      name: /chat messages/i,
    })
    expect(messageList).toBeInTheDocument()
  })
})

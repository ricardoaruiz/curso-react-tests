import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should be render correctly', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Wellcome to React with webpack/i })
    )
    expect(screen.getByRole('img', { name: /react logo url mode svg/i }))
    expect(screen.getByRole('img', { name: /react logo component mode svg/i }))
  })
})

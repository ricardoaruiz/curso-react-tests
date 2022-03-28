import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should be render with default variant', () => {
    render(<Button>Success Button</Button>)

    const button = screen.getByRole('button', { name: /success button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#139203',
      color: '#fff',
    })
  })

  it('should be render with danger variant', () => {
    render(<Button variant="danger">Danger Button</Button>)

    const button = screen.getByRole('button', { name: /danger button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#920303',
      color: '#fff',
    })
  })

  it('should be render with warning variant', () => {
    render(<Button variant="warning">Warning Button</Button>)

    const button = screen.getByRole('button', { name: /warning button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#ccb801',
      color: '#fff',
    })
  })
})

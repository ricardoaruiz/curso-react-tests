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

  it('should be render with default variant disabled', () => {
    render(<Button disabled>Success Button</Button>)

    const button = screen.getByRole('button', { name: /success button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#9ebe9a',
      'border-color': '#9ebe9a',
      cursor: 'not-allowed',
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

  it('should be render with default variant disabled', () => {
    render(
      <Button variant="danger" disabled>
        Danger Button
      </Button>
    )

    const button = screen.getByRole('button', { name: /danger button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#bd7777',
      'border-color': '#bd7777',
      cursor: 'not-allowed',
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

  it('should be render with warning variant', () => {
    render(
      <Button variant="warning" disabled>
        Warning Button
      </Button>
    )

    const button = screen.getByRole('button', { name: /warning button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#d3cb86',
      'border-color': '#d3cb86',
      cursor: 'not-allowed',
    })
  })
})

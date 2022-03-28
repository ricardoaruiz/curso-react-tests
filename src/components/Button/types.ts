import React from 'react'

export type ButtonProps = {
  variant?: ButtonVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonVariant = 'success' | 'danger' | 'warning'

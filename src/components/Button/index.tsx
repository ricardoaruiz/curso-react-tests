import React from 'react'

import { ButtonProps } from './types'

import * as S from './styles'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'success',
  ...rest
}) => {
  return (
    <S.Button type="button" variant={variant} {...rest}>
      {children}
    </S.Button>
  )
}

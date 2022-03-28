import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

type StyledButtonProps = Pick<ButtonProps, 'variant'>

const buttonModifiers = {
  success: () => css`
    background-color: #139203;
  `,
  danger: () => css`
    background-color: #920303;
  `,
  warning: () => css`
    background-color: #ccb801;
  `,
}

export const Button = styled.button<StyledButtonProps>`
  ${({ variant = 'success' }) => css`
    color: #fff;
    ${buttonModifiers[variant]};
  `}
`

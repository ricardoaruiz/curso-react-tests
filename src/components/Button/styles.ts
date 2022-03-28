import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

type StyledButtonProps = Pick<ButtonProps, 'variant'>

const COLORS = {
  success: {
    primary: '#139203',
    focus: '#0d6302',
    active: '#073d00',
    disabled: '#9ebe9a',
  },
  danger: {
    primary: '#920303',
    focus: '#630404',
    active: '#360000',
    disabled: '#bd7777',
  },
  warning: {
    primary: '#ccb801',
    focus: '#928400',
    active: '#5e5400',
    disabled: '#d3cb86',
  },
}

const buttonModifiers = {
  success: () => css`
    background-color: ${COLORS.success.primary};
    border: 4px solid ${COLORS.success.primary};

    &:focus {
      border-color: ${COLORS.success.focus};
    }
    &:hover {
      background-color: ${COLORS.success.focus};
      border-color: ${COLORS.success.focus};
    }
    &:active {
      background-color: ${COLORS.success.active};
      border-color: ${COLORS.success.active};
    }
    &:disabled {
      background-color: ${COLORS.success.disabled};
      border-color: ${COLORS.success.disabled};
      cursor: not-allowed;
    }
  `,
  danger: () => css`
    background-color: ${COLORS.danger.primary};
    border: 4px solid ${COLORS.danger.primary};

    &:focus {
      border-color: ${COLORS.danger.focus};
    }
    &:hover {
      background-color: ${COLORS.danger.focus};
      border-color: ${COLORS.danger.focus};
    }
    &:active {
      background-color: ${COLORS.danger.active};
      border-color: ${COLORS.danger.active};
    }
    &:disabled {
      background-color: ${COLORS.danger.disabled};
      border-color: ${COLORS.danger.disabled};
      cursor: not-allowed;
    }
  `,
  warning: () => css`
    background-color: ${COLORS.warning.primary};
    border: 4px solid ${COLORS.warning.primary};

    &:focus {
      border-color: ${COLORS.warning.focus};
    }
    &:hover {
      background-color: ${COLORS.warning.focus};
      border-color: ${COLORS.warning.focus};
    }
    &:active {
      background-color: ${COLORS.warning.active};
      border-color: ${COLORS.warning.active};
    }
    &:disabled {
      background-color: ${COLORS.warning.disabled};
      border-color: ${COLORS.warning.disabled};
      cursor: not-allowed;
    }
  `,
}

export const Button = styled.button<StyledButtonProps>`
  ${({ variant = 'success' }) => css`
    color: #fff;
    padding: 0.5rem 0.75rem;

    border-radius: 5px;
    outline: none;

    font-size: 1.2rem;
    font-weight: 700;

    cursor: pointer;

    ${buttonModifiers[variant]};
  `}
`

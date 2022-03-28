export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

type ButtonVariant = 'success' | 'danger' | 'warning'

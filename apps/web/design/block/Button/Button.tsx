interface ButtonProps {
  children?: React.ReactNode
  label: string
}

export function Button({ label }: ButtonProps) {
  return <button>{label}</button>
}

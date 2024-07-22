import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="m-auto w-full max-w-screen-wrapper">{children}</div>
}

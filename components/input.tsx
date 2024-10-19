import { ComponentProps, ReactNode } from 'react'

type InputProps = ComponentProps<'input'> & {
  label?: string
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={props.name} className="text-sm">
          {label}
        </label>
      )}
      <input {...props} className="w-full border border-zinc-700 px-4 py-2" />
    </div>
  )
}

export function InputError({ children }: { children: ReactNode }) {
  return <p className="text-sm text-red-500">{children}</p>
}

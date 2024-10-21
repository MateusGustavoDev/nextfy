import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import { ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'

type ActionButtonProps = ComponentProps<'button'>

export function ActionButton({ children, className, ...props }: ActionButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      {...props}
      aria-disabled={pending}
      type="submit"
      className={cn(
        'flex w-full items-center justify-center bg-black py-2 text-white aria-disabled:pointer-events-none',
        className,
      )}
    >
      {pending ? <LoaderCircle className="relative animate-spin text-white" /> : children}
    </button>
  )
}

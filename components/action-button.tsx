import { LoaderCircle } from 'lucide-react'
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'w-max gap-2 aria-disabled:pointer-events-none flex justify-center items-center',
  variants: {
    color: {
      primary: 'bg-black text-white data-[pending=true]:text-neutral-300 data-[pending=true]:bg-neutral-800',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-none',
    },
    disabled: {
      true: 'aria-disabled:pointer-events-none',
    },
    full: {
      true: 'w-full',
    },
    size: {
      sm: 'text-sm h-8 px-3',
      md: 'text-sm h-10 px-4',
      lg: 'text-base h-12 px-5 ',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: true,
      className: 'bg-neutral-400',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    shape: 'square',
    full: false,
  },
})

type ActionButtonProps = VariantProps<typeof button> & {
  children: ReactNode
}

export function ActionButton({ children, size, color, shape, disabled, full }: ActionButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending || disabled}
      data-pending={pending}
      type="submit"
      className={button({ size, color, shape, disabled, full })}
    >
      {pending && <Loader size={size} />}
      {children}
    </button>
  )
}

const loader = tv({
  base: 'relative animate-spin',
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-4 w-4',
      lg: 'h-7 w-7 ',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

type LoaderProps = VariantProps<typeof loader>

function Loader({ size }: LoaderProps) {
  return <LoaderCircle className={loader({ size })} />
}

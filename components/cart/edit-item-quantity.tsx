'use client'
import { updateItemQuantityAction } from '@/actions/cart'
import { LoaderCircle, MinusIcon, PlusIcon } from 'lucide-react'
import { useFormStatus } from 'react-dom'

interface EditItemQuantityProps {
  id: string
  merchandiseId: string
  quantity: number
  quantityAvailable: number
}

export function EditItemQuantity({ id, merchandiseId, quantity, quantityAvailable }: EditItemQuantityProps) {
  return (
    <SelectItemQuantity
      id={id}
      merchandiseId={merchandiseId}
      quantity={quantity}
      quantityAvailable={quantityAvailable}
    />
  )
}

export function SelectItemQuantity({ merchandiseId, id, quantity, quantityAvailable }: EditItemQuantityProps) {
  async function handleUpdateItemQuantity(type: 'plus' | 'minus') {
    const payload = {
      lineId: id,
      variantId: merchandiseId,
      quantity: type === 'plus' ? quantity + 1 : quantity - 1,
    }

    const { errors } = await updateItemQuantityAction(payload)
    if (errors) alert(errors.message)
  }

  const handleIncrementQuantity = handleUpdateItemQuantity.bind(null, 'plus')
  const handleDecrementQuantity = handleUpdateItemQuantity.bind(null, 'minus')

  return (
    <div className="mt-2 flex justify-center gap-3 border border-black py-1">
      <form action={handleDecrementQuantity} className="flex items-center">
        <Button type="minus" />
      </form>
      <span className="text-sm">{quantity}</span>
      <form action={handleIncrementQuantity} className="flex items-center">
        <Button type="plus" disabled={quantity === quantityAvailable} />
      </form>
    </div>
  )
}

interface ButtonProps {
  type: 'minus' | 'plus'
  disabled?: boolean
}

export function Button({ type, disabled }: ButtonProps) {
  const { pending } = useFormStatus()

  if (pending) return <LoaderCircle className="h-4 w-4 animate-spin" />

  return (
    <button
      aria-disabled={pending || disabled}
      className="aria-disabled:pointer-events-none aria-disabled:text-neutral-400"
    >
      {type === 'minus' ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
    </button>
  )
}

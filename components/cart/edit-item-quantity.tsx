'use client'
import { updateItemQuantityAction } from '@/actions/cart'
import { LoaderCircle, Minus, Plus } from 'lucide-react'
import { useFormStatus } from 'react-dom'

interface EditItemQuantityButtonProps {
  id: string
  merchandiseId: string
  quantity: number
  type: 'minus' | 'plus'
  quantityAvailable?: number
}

export function EditItemQuantityButton({
  id,
  merchandiseId,
  quantity,
  type,
  quantityAvailable,
}: EditItemQuantityButtonProps) {
  const payload = {
    lineId: id,
    variantId: merchandiseId,
    quantity: type === 'plus' ? quantity + 1 : quantity - 1,
  }

  async function handleUpdateItemQuantity() {
    const { errors } = await updateItemQuantityAction(payload)
    if (errors) alert(errors.message)
  }

  return (
    <form action={handleUpdateItemQuantity} className="flex items-center">
      <UpdateItemQuantityButton type={type} quantity={quantity} quantityAvailable={quantityAvailable} />
    </form>
  )
}

interface UpdateItemQuantityButtonProps {
  type: 'minus' | 'plus'
  quantity: number
  quantityAvailable: number | undefined
}

function UpdateItemQuantityButton({ type, quantity, quantityAvailable }: UpdateItemQuantityButtonProps) {
  const { pending } = useFormStatus()

  if (pending) return <LoaderCircle className="h-4 w-4 animate-spin" />

  if (type === 'minus') {
    return (
      <button type="submit">
        <Minus size={18} />
      </button>
    )
  }

  if (type === 'plus') {
    return (
      <button
        type="submit"
        aria-disabled={quantity === quantityAvailable}
        data-max-quantity={quantity === quantityAvailable}
        className="aria-disabled:pointer-events-none data-[max-quantity=true]:text-zinc-400"
      >
        <Plus size={18} />
      </button>
    )
  }
}

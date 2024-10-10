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
    const { success, message } = await updateItemQuantityAction(payload)
    if (!success) alert(message)
  }

  return (
    <form action={handleUpdateItemQuantity} className="flex items-center">
      <SubmitButton type={type} quantity={quantity} quantityAvailable={quantityAvailable} />
    </form>
  )
}

interface SubmitButtonProps {
  type: 'minus' | 'plus'
  quantity: number
  quantityAvailable: number | undefined
}

function SubmitButton({ type, quantity, quantityAvailable }: SubmitButtonProps) {
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
        disabled={quantity === quantityAvailable}
        data-max-quantity={quantity === quantityAvailable}
        className="data-[max-quantity=true]:text-zinc-400"
      >
        <Plus size={18} />
      </button>
    )
  }
}

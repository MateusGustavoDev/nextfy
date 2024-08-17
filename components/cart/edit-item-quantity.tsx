import { updateItemQuantity } from '@/lib/shopify/fetch/cart'
import { Minus, Plus } from 'lucide-react'
import { useFormState } from 'react-dom'

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
  const [message, formAction] = useFormState(updateItemQuantity, null)

  const payload = {
    lineId: id,
    variantId: merchandiseId,
    quantity: type === 'plus' ? quantity + 1 : quantity - 1,
  }

  const actionWithVariant = formAction.bind(null, payload)

  return (
    <form action={actionWithVariant} className="flex items-center">
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
  return (
    <>
      {type === 'minus' && (
        <button type="submit">
          <Minus size={18} />
        </button>
      )}
      {type === 'plus' && (
        <button
          type="submit"
          disabled={quantity === quantityAvailable}
          data-max-quantity={quantity === quantityAvailable}
          className="data-[max-quantity=true]:text-zinc-400"
        >
          <Plus size={18} />
        </button>
      )}
    </>
  )
}

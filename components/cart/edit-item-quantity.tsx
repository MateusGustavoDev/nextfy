import { updateItemQuantity } from '@/lib/shopify/fetch/cart'
import { Minus, Plus } from 'lucide-react'
import { useFormState } from 'react-dom'

interface EditItemQuantityButtonProps {
  id: string
  merchandiseId: string
  quantity: number
  type: 'minus' | 'plus'
}

export function EditItemQuantityButton({ id, merchandiseId, quantity, type }: EditItemQuantityButtonProps) {
  const [message, formAction] = useFormState(updateItemQuantity, null)

  const payload = {
    lineId: id,
    variantId: merchandiseId,
    quantity: type === 'plus' ? quantity + 1 : quantity - 1,
  }

  const actionWithVariant = formAction.bind(null, payload)

  return (
    <form action={actionWithVariant} className="flex items-center">
      <SubmitButton type={type} />
    </form>
  )
}

interface SubmitButtonProps {
  type: 'minus' | 'plus'
}

function SubmitButton({ type }: SubmitButtonProps) {
  return (
    <>
      {type === 'minus' && (
        <button type="submit">
          <Minus size={18} />
        </button>
      )}
      {type === 'plus' && (
        <button type="submit">
          <Plus size={18} />
        </button>
      )}
    </>
  )
}

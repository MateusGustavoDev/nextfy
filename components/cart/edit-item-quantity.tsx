'use client'
import { updateItemQuantityAction } from '@/actions/cart'
import { LoaderCircle, Minus, Plus } from 'lucide-react'
import { useActionState, useOptimistic, useState } from 'react'
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
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    quantity,
    (state: number, change: number) => state + change,
  )

  async function handleUpdateItemQuantity() {
    const change = type === 'plus' ? 1 : -1
    setOptimisticQuantity(change)

    const payload = {
      lineId: id,
      variantId: merchandiseId,
      quantity: optimisticQuantity + change,
    }

    const { error } = await updateItemQuantityAction(payload)

    if (error) {
      return { error: true }
    }

    return { error: false }
  }

  const [error, formAction] = useActionState(handleUpdateItemQuantity, { error: false })

  return (
    <form action={formAction} className="flex items-center">
      <SubmitButton type={type} quantity={optimisticQuantity} quantityAvailable={quantityAvailable} />
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

  if (type === 'minus') {
    {
      return (
        <>
          {pending ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <button type="submit">
              <Minus size={18} />
            </button>
          )}
        </>
      )
    }
  }

  if (type === 'plus') {
    return (
      <>
        {pending ? (
          <LoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
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
}

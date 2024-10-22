'use client'
import { DEFAULT_OPTION } from '@/lib/constants'
import { formatPriceToBrl } from '@/lib/utils'
import Image from 'next/image'
import { EditItemQuantityButton } from './edit-item-quantity'
import { removeCartItemAction } from '@/actions/cart'
import { useFormStatus } from 'react-dom'
import { LoaderCircle } from 'lucide-react'

interface CartItemProps {
  id: string
  merchandiseId: string
  cartId: string
  price: string
  title: string
  variantTitle: string
  image: string
  quantity: number
  quantityAvailable: number
}

export function CartItem({
  id,
  merchandiseId,
  cartId,
  title,
  variantTitle,
  price,
  image,
  quantity,
  quantityAvailable,
}: CartItemProps) {
  const removeCartItemWithIds = removeCartItemAction.bind(null, cartId, id)

  return (
    <div className="relative flex w-full gap-3">
      <div className="relative h-24 w-24 shrink-0 border border-black bg-white">
        <Image src={image} alt={title} fill sizes="96px" style={{ objectFit: 'contain', padding: '8px' }} />
        <form action={removeCartItemWithIds}>
          <RemoveCartItemButton />
        </form>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex w-full justify-between">
          <div className="flex w-full max-w-[130px] flex-col">
            <span>{title}</span>
            {variantTitle !== DEFAULT_OPTION && <span className="text-sm">{variantTitle}</span>}
          </div>
          <div className="flex flex-col">
            <span>{formatPriceToBrl(price)}</span>
            <div className="mt-2 flex h-max items-center justify-center gap-4 border border-black py-1">
              <EditItemQuantityButton type="minus" id={id} merchandiseId={merchandiseId} quantity={quantity} />
              <span>{quantity}</span>
              <EditItemQuantityButton
                type="plus"
                id={id}
                merchandiseId={merchandiseId}
                quantity={quantity}
                quantityAvailable={quantityAvailable}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RemoveCartItemButton() {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="absolute -right-4 -top-4 z-50 h-7 w-7 rounded-full bg-black text-white aria-disabled:pointer-events-none"
    >
      {pending ? <LoaderCircle className="animate-spin" /> : 'X'}
    </button>
  )
}

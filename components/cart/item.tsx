'use client'
import { DEFAULT_OPTION } from '@/lib/constants'
import { formatPriceToBrl } from '@/lib/utils'
import Image from 'next/image'
import { EditItemQuantity } from './edit-item-quantity'
import { removeCartItemAction } from '@/actions/cart'
import { X } from 'lucide-react'
import { ActionButton } from '@/components/action-button'

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
          <div className="absolute -right-3 -top-3 z-50">
            <ActionButton size="sm" shape="circle" icon={X} svgOnly />
          </div>
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
            <EditItemQuantity
              id={id}
              merchandiseId={merchandiseId}
              quantity={quantity}
              quantityAvailable={quantityAvailable}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

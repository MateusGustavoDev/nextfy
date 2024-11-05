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

export function CartItem(props: CartItemProps) {
  const removeCartItemWithIds = removeCartItemAction.bind(null, props.cartId, props.id)

  return (
    <div className="relative flex w-full gap-3">
      <div className="relative h-24 w-24 shrink-0 border border-black bg-white">
        <Image src={props.image} alt={props.title} fill sizes="96px" style={{ objectFit: 'contain', padding: '8px' }} />
        <form action={removeCartItemWithIds}>
          <div className="absolute -right-3 -top-3 z-50">
            <ActionButton size="sm" shape="circle" icon={X} svgOnly />
          </div>
        </form>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex w-full justify-between">
          <div className="flex w-full max-w-[130px] flex-col">
            <span>{props.title}</span>
            {props.variantTitle !== DEFAULT_OPTION && <span className="text-sm">{props.variantTitle}</span>}
          </div>
          <div className="flex flex-col">
            <span>{formatPriceToBrl(props.price)}</span>
            <EditItemQuantity
              id={props.id}
              merchandiseId={props.merchandiseId}
              quantity={props.quantity}
              quantityAvailable={props.quantityAvailable}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

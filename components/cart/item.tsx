'use client'
import { DEFAULT_OPTION } from '@/lib/constants'
import { formatPriceBrl } from '@/lib/utils'
import Image from 'next/image'
import { EditItemQuantityButton } from './edit-item-quantity'
import { removeCartItemAction } from '@/actions/cart'
import { useFormStatus } from 'react-dom'
import { LoaderCircle } from 'lucide-react'
import { ReactNode } from 'react'

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
  return (
    <div className="flex w-full gap-3">
      <div className="relative h-24 w-24 shrink-0 border border-black bg-white">
        <Image src={image} alt={title} fill sizes="96px" style={{ objectFit: 'contain', padding: '8px' }} />
        <form action={() => removeCartItemAction(cartId, id)}>
          <button
            type="submit"
            className="absolute -right-2 -top-2 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-xs text-white"
          >
            <Loading>X</Loading>
          </button>
        </form>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex w-full justify-between">
          <div className="flex w-full max-w-[130px] flex-col">
            <span>{title}</span>
            {variantTitle !== DEFAULT_OPTION && <span className="text-sm">{variantTitle}</span>}
          </div>
          <div className="flex flex-col">
            <span>{formatPriceBrl(price)}</span>
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

export function Loading({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus()

  return pending ? <LoaderCircle className="h-4 w-4 animate-spin text-white" /> : children
}

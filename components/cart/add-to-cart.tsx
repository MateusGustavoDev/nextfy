'use client'
import { addProductToCartAction } from '@/actions/cart'
import { ProductVariantType } from '@/lib/shopify/fetch/types'
import { Image } from '@/lib/shopify/types/storefront.types'
import { useSearchParams } from 'next/navigation'
import { ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'
import { LoaderCircle } from 'lucide-react'

interface AddToCartProps {
  variants: ProductVariantType[]
  availableForSale: boolean | undefined
  images?: Image
}

export function AddToCart({ variants, availableForSale }: AddToCartProps) {
  const searchParams = useSearchParams()
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined

  const variant = variants.find((variant) =>
    variant.selectedOptions.every((option) => option.value === searchParams.get(option.name.toLowerCase())),
  )

  const selectedVariantId = variant?.id || defaultVariantId

  if (!availableForSale) {
    return (
      <button aria-disabled disabled className="bg-black/70 py-2 text-white">
        Fora de estoque
      </button>
    )
  }

  if (!selectedVariantId) {
    return (
      <button aria-label="Selecione a variante" aria-disabled disabled className="bg-black/70 py-2 text-white">
        Selecione a variante
      </button>
    )
  }

  async function handleAddProductToCart() {
    const { success, message } = await addProductToCartAction(selectedVariantId as string)
    if (!success) alert(message)
  }

  return (
    <form action={handleAddProductToCart} className="w-full">
      <AddToCartButton type="submit" aria-label="Adicionar ao carrinho">
        Adicionar ao carrinho
      </AddToCartButton>
    </form>
  )
}

type AddToCartButtonProps = ComponentProps<'button'>

export function AddToCartButton({ children, ...props }: AddToCartButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button {...props} disabled={pending} className="w-full bg-black py-2 text-white">
      {pending ? <LoaderCircle className="m-auto animate-spin" /> : children}
    </button>
  )
}

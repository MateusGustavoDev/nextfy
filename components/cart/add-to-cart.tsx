'use client'
import { addProductToCartAction } from '@/actions/cart'
import { ProductVariantType } from '@/lib/shopify/fetch/types'
import { Image } from '@/lib/shopify/types/storefront.types'
import { useSearchParams } from 'next/navigation'
import { ActionButton } from '../action-button'

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
      <button aria-disabled className="bg-black/70 py-2 text-white">
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

  if (variant && !variant.availableForSale) {
    return (
      <button aria-label="Selecione a variante" aria-disabled disabled className="bg-black/70 py-2 text-white">
        Variante naõ disponível
      </button>
    )
  }

  async function handleAddProductToCart() {
    const { errors } = await addProductToCartAction(selectedVariantId as string)
    if (errors) alert(errors.message)
  }

  return (
    <form action={handleAddProductToCart} className="w-full">
      <ActionButton>Adicionar ao carrinho</ActionButton>
    </form>
  )
}

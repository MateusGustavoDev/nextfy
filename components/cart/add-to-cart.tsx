'use client'
import { addProductToCart } from '@/lib/shopify/fetch/cart'
import { ProductVariantsType } from '@/lib/shopify/fetch/types'
import { Image } from '@/lib/shopify/types/storefront.types'
import { useSearchParams } from 'next/navigation'

interface AddToCartProps {
  variants: ProductVariantsType
  availableForSale: boolean | undefined
  images?: Image
}

export function AddToCart({ variants, availableForSale }: AddToCartProps) {
  const searchParams = useSearchParams()

  if (!variants) return null

  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined

  const variant = variants.find((variant) =>
    variant.selectedOptions.every((option) => option.value === searchParams.get(option.name.toLowerCase())),
  )

  const selectedVariantId = variant?.id || defaultVariantId

  if (!availableForSale) {
    return (
      <button aria-disabled disabled className="cursor-not-allowed bg-black/70 py-2 text-white">
        Fora de estoque
      </button>
    )
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Selecione a variante"
        aria-disabled
        disabled
        className="cursor-not-allowed bg-black/70 py-2 text-white"
      >
        <div className="absolute left-0 ml-4"></div>
        Selecione a variante
      </button>
    )
  }

  async function handleAddProductToCart(variantId: string) {
    const { success } = await addProductToCart(variantId)
  }

  return (
    <form action={() => handleAddProductToCart(selectedVariantId)} className="w-full">
      <button type="submit" aria-label="Adicionar ao carrinho" className="w-full bg-black py-2 text-white">
        Adicionar ao carrinho
      </button>
    </form>
  )
}

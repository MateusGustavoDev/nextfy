'use client'
import { addProductToCartAction } from '@/actions/cart'
import { ProductVariantsType } from '@/lib/shopify/fetch/types'
import { Image } from '@/lib/shopify/types/storefront.types'
import { useSearchParams } from 'next/navigation'
import { Loading } from './item'

interface AddToCartProps {
  variants: ProductVariantsType
  availableForSale: boolean | undefined
  images?: Image
}

export function AddToCartButton({ variants, availableForSale }: AddToCartProps) {
  const searchParams = useSearchParams()

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

  async function handleAddProductToCart() {
    const { error } = await addProductToCartAction(selectedVariantId as string)
    if (error) alert('Erro ao adicionar o produto ao carrinho')
  }

  return (
    <form action={handleAddProductToCart} className="w-full">
      <button type="submit" aria-label="Adicionar ao carrinho" className="w-full bg-black py-2 text-white">
        <Loading>Adicionar ao carrinho</Loading>
      </button>
    </form>
  )
}

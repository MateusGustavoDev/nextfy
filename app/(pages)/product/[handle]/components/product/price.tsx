'use client'
import { DEFAULT_OPTION } from '@/lib/constants'
import { ProductOptionsType, ProductVariantsType } from '@/lib/shopify/fetch/types'
import { formatPriceBrl } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

interface PriceProps {
  amount: string
  variants: ProductVariantsType
  options: ProductOptionsType
}

type ParamsObj = {
  [key: string]: string | boolean
}

export function Price({ amount, variants, options }: PriceProps) {
  const searchParams = useSearchParams()

  function getSelectedVariantPrice() {
    const firstVariantIsDefault = Boolean(
      options.find((option) => option.name === 'Title' && option.values[0] === DEFAULT_OPTION),
    )

    if (firstVariantIsDefault) return amount

    const paramsObj: ParamsObj = {}

    options.forEach((option) => {
      const paramValue = searchParams.get(option.name.toLowerCase())
      if (paramValue && option.values.includes(paramValue)) {
        paramsObj[option.name] = paramValue
      }
    })

    const matchedVariant = variants.find((variant) => {
      return variant.selectedOptions.every((option) => {
        return paramsObj[option.name] === option.value
      })
    })

    if (matchedVariant) return matchedVariant.price.amount
  }

  const price = getSelectedVariantPrice()

  return (
    <div>
      <div>{price && <span className="text-3xl font-bold">{formatPriceBrl(price)}</span>}</div>
    </div>
  )
}

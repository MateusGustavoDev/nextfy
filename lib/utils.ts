import { type ClassValue, clsx } from 'clsx'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { SelectedOption } from './shopify/types/storefront.types'
import { Product } from './shopify/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export function formatPriceBrl(price: string): string {
  const priceNumber = Number(price)
  return priceNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function productFirstVariantUrl(product: Product) {
  const firstVariant = product.variants.edges[0].node
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option: SelectedOption) => option.name === 'Title' && option.value === 'Default Title',
    ),
  )

  if (firstVariantIsDefault) return `/product/${product.handle}`

  const queryParams = firstVariant.selectedOptions
    .map((option) => {
      const paramName = option.name.toLowerCase()
      let paramValue = encodeURIComponent(option.value)
      paramValue = paramValue.replace(/%20/g, '+')
      return `${paramName}=${paramValue}`
    })
    .join('&')

  return `/product/${product.handle}?${queryParams}`
}

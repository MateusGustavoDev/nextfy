import { clsx, type ClassValue } from 'clsx'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { ProductVariantType } from './shopify/fetch/types'
import { DEFAULT_OPTION } from './constants'
import { SelectedOption } from './shopify/types/storefront.types'

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

export function firstProductVariantUrl(variants: ProductVariantType[], productHandle: string) {
  console.log('====== ')
  console.log(variants)

  const firstVariant = variants[0]

  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option: SelectedOption) => option.name === 'Title' && option.value === DEFAULT_OPTION,
    ),
  )

  if (firstVariantIsDefault) return `/product/${productHandle}`

  const queryParams = firstVariant.selectedOptions
    .map((option) => {
      const paramName = option.name.toLowerCase()
      let paramValue = encodeURIComponent(option.value)
      paramValue = paramValue.replace(/%20/g, '+')
      return `${paramName}=${paramValue}`
    })
    .join('&')

  return `/product/${productHandle}?${queryParams}`
}

type Connection<T> = {
  edges: Array<Edge<T>>
}

type Edge<T> = {
  node: T
}

export const removeEdgesAndNodes = <T>(array: Connection<T>) => {
  return array.edges.map((edge) => edge?.node)
}

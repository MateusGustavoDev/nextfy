import { ProductFragment } from './types/storefront.generated'
import { Image, Maybe, MoneyV2, ProductOption, ProductVariant, SelectedOption } from './types/storefront.types'

export type ProductOptions = Pick<ProductOption, 'id' | 'name' | 'values'>[] | undefined

export type Product = ProductFragment

export type ProductVariants = (Pick<ProductVariant, 'id' | 'availableForSale' | 'title'> & {
  selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
  price: Pick<MoneyV2, 'amount' | 'currencyCode'>
  image?: Maybe<Pick<Image, 'url'>> | undefined
})[]

export type Images = { node: Pick<Image, 'url' | 'altText' | 'height' | 'width'> }[] | undefined

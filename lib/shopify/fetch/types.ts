import { ProductFragment } from '../types/storefront.generated'
import { Image, Maybe, MoneyV2, PageInfo, ProductOption, SelectedOption } from '../types/storefront.types'

export type ProductType = ProductFragment

export type ProductVariantType = {
  id: string
  availableForSale: boolean
  title: string
  quantityAvailable?: Maybe<number> | undefined
  selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
  price: Pick<MoneyV2, 'amount' | 'currencyCode'>
  image?: Maybe<Pick<Image, 'url'>>
}

export type ProductOptionType = Pick<ProductOption, 'id' | 'name' | 'values'>

export type ImageType = Pick<Image, 'url' | 'altText' | 'height' | 'width'>

export type CollectionProductType = {
  title: string
  products: ProductType[]
}

type LineType = {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
    product: ProductType
  }
}

export type CartType = {
  id: string
  createdAt: string
  updateAt: string
  checkoutUrl: string
  totalQuantity: number
  cost: {
    totalAmount: Pick<MoneyV2, 'amount' | 'currencyCode'>
    subtotalAmount: Pick<MoneyV2, 'amount' | 'currencyCode'>
    totalTaxAmount?: Maybe<Pick<MoneyV2, 'amount' | 'currencyCode'>> | undefined
    totalDutyAmount?: Maybe<Pick<MoneyV2, 'amount' | 'currencyCode'>> | undefined
  }
  lines: LineType[]
}

type Collection = {
  cursor: string
  id: string
  title: string
  handle: string
}

export type CollectionsType = {
  collections: Collection[]
  pageInfo: Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage'>
}

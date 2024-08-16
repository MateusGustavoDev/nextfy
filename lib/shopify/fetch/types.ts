import { ProductFragment } from '../types/storefront.generated'
import {
  Attribute,
  Cart,
  CartLine,
  Collection,
  ComponentizableCartLine,
  Image,
  Maybe,
  MoneyV2,
  ProductOption,
  ProductVariant,
  SelectedOption,
} from '../types/storefront.types'

export type ProductOptionsType = Pick<ProductOption, 'id' | 'name' | 'values'>[] | undefined

export type Product = ProductFragment

export type ProductVariantsType = (Pick<ProductVariant, 'id' | 'availableForSale' | 'title'> & {
  selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
  price: Pick<MoneyV2, 'amount' | 'currencyCode'>
  image?: Maybe<Pick<Image, 'url'>> | undefined
})[]

export type ImagesType = { node: Pick<Image, 'url' | 'altText' | 'height' | 'width'> }[] | undefined

export type ProductType =
  | (Pick<
      Product,
      'handle' | 'id' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'
    > & {
      options: Pick<ProductOption, 'id' | 'name' | 'values'>[]
      priceRange: {
        maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
        minVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
      }
      compareAtPriceRange: {
        maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
      }
      variants: {
        edges: {
          node: Pick<ProductVariant, 'id' | 'availableForSale' | 'title'> & {
            selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
            price: Pick<MoneyV2, 'amount' | 'currencyCode'>
            image?: Maybe<Pick<Image, 'url'>> | undefined
          }
        }[]
      }
      featuredImage?: Maybe<Pick<Image, 'url' | 'altText' | 'width' | 'height'>> | undefined
      images: {
        edges: {
          node: Pick<Image, 'url' | 'altText' | 'width' | 'height'>
        }[]
      }
    })
  | undefined

export type CollectionType =
  | (Pick<Collection, 'title'> & {
      products: {
        edges: {
          node: Pick<
            Product,
            'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'
          > & {
            options: Pick<ProductOption, 'id' | 'name' | 'values'>[]
            priceRange: {
              maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
              minVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
            }
            compareAtPriceRange: {
              maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
            }
            variants: {
              edges: {
                node: Pick<ProductVariant, 'id' | 'availableForSale' | 'title'> & {
                  selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
                  price: Pick<MoneyV2, 'amount' | 'currencyCode'>
                  image?: Maybe<Pick<Image, 'url'>> | undefined
                }
              }[]
            }
            featuredImage?: Maybe<Pick<Image, 'url' | 'altText' | 'height' | 'width'>> | undefined
            images: {
              edges: {
                node: Pick<Image, 'url' | 'altText' | 'height' | 'width'>
              }[]
            }
          }
        }[]
      }
    })
  | undefined

export type CartType =
  | Maybe<
      Pick<Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl' | 'totalQuantity'> & {
        lines: {
          edges: {
            node:
              | (Pick<CartLine, 'id' | 'quantity'> & {
                  merchandise: Pick<ProductVariant, 'id' | 'title'> & {
                    selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
                    product: Pick<
                      Product,
                      | 'id'
                      | 'updatedAt'
                      | 'title'
                      | 'handle'
                      | 'availableForSale'
                      | 'description'
                      | 'descriptionHtml'
                      | 'tags'
                    > & {
                      options: Pick<ProductOption, 'name' | 'id' | 'values'>[]
                      priceRange: {
                        maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
                        minVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
                      }
                      compareAtPriceRange: { maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'> }
                      variants: {
                        edges: {
                          node: Pick<ProductVariant, 'id' | 'title' | 'availableForSale'> & {
                            selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
                            price: Pick<MoneyV2, 'amount' | 'currencyCode'>
                            image?: Maybe<Pick<Image, 'url'>> | undefined
                          }
                        }[]
                      }
                      featuredImage?: Maybe<Pick<Image, 'url' | 'altText' | 'width' | 'height'>> | undefined
                      images: { edges: { node: Pick<Image, 'url' | 'altText' | 'width' | 'height'> }[] }
                    }
                  }
                })
              | (Pick<ComponentizableCartLine, 'id' | 'quantity'> & {
                  merchandise: Pick<ProductVariant, 'id' | 'title'> & {
                    selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
                    product: Pick<
                      Product,
                      | 'id'
                      | 'updatedAt'
                      | 'title'
                      | 'handle'
                      | 'availableForSale'
                      | 'description'
                      | 'descriptionHtml'
                      | 'tags'
                    > & {
                      options: Pick<ProductOption, 'name' | 'id' | 'values'>[]
                      priceRange: {
                        maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
                        minVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'>
                      }
                      compareAtPriceRange: { maxVariantPrice: Pick<MoneyV2, 'amount' | 'currencyCode'> }
                      variants: {
                        edges: {
                          node: Pick<ProductVariant, 'id' | 'title' | 'availableForSale'> & {
                            selectedOptions: Pick<SelectedOption, 'name' | 'value'>[]
                            price: Pick<MoneyV2, 'amount' | 'currencyCode'>
                            image?: Maybe<Pick<Image, 'url'>> | undefined
                          }
                        }[]
                      }
                      featuredImage?: Maybe<Pick<Image, 'url' | 'altText' | 'width' | 'height'>> | undefined
                      images: { edges: { node: Pick<Image, 'url' | 'altText' | 'width' | 'height'> }[] }
                    }
                  }
                })
          }[]
        }
        attributes: Pick<Attribute, 'value' | 'key'>[]
        cost: {
          totalAmount: Pick<MoneyV2, 'amount' | 'currencyCode'>
          subtotalAmount: Pick<MoneyV2, 'amount' | 'currencyCode'>
          totalTaxAmount?: Maybe<Pick<MoneyV2, 'amount' | 'currencyCode'>> | undefined
          totalDutyAmount?: Maybe<Pick<MoneyV2, 'amount' | 'currencyCode'>> | undefined
        }
      }
    >
  | undefined

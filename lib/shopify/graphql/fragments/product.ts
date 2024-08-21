import { imageFragment } from './image'
import { ProductVariantFragment } from './variants'

export const productFragment = /* GraphQL */ `
  fragment Product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      ...ProductVariant
    }
    featuredImage {
      ...Image
    }
    images(first: 20) {
      edges {
        node {
          ...Image
        }
      }
    }
    tags
    updatedAt
  }
  ${ProductVariantFragment}
  ${imageFragment}
`

import { imageFragment } from './image'

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
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          image {
            url
          }
        }
      }
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
  ${imageFragment}
`

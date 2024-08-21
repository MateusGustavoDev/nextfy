import { productFragment } from '../fragments/product'
import { ProductVariantFragment } from '../fragments/variants'

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts($handle: String!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean) {
    collection(handle: $handle) {
      title
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...Product
          }
        }
      }
    }
  }
  ${productFragment}
`

export const getProductByHandleQuery = /* GraphQL */ `
  query getProductByHandle($handle: String) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${productFragment}
`

export const searchProductsQuery = /* GraphQL */ `
  query searchProducts($query: String!, $first: Int) {
    search(query: $query, first: $first, types: PRODUCT) {
      edges {
        node {
          ... on Product {
            id
            title
            handle
            variants(first: $first) {
              ...ProductVariant
            }
          }
        }
      }
    }
  }
  ${ProductVariantFragment}
`

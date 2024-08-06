import { productFragment } from '../fragments/product'

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

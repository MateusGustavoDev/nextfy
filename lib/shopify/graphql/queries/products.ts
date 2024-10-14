import { pageInfoFragment } from '../fragments/page-info'
import { productFragment } from '../fragments/product'

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts($handle: String!, $first: Int, $cursor: String) {
    collection(handle: $handle) {
      title
      products(first: $first, after: $cursor) {
        edges {
          node {
            ...Product
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${pageInfoFragment}
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
  query searchProducts($query: String!, $first: Int, $cursor: String) {
    search(query: $query, first: $first, types: PRODUCT, after: $cursor) {
      edges {
        node {
          ...Product
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${pageInfoFragment}
  ${productFragment}
`

export const getAllProductsQuery = /* GraphQL */ `
  query getProductsAndVariants($first: Int!, $cursor: String) {
    products(first: $first, after: $cursor) {
      edges {
        cursor
        node {
          ...Product
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${pageInfoFragment}
  ${productFragment}
`

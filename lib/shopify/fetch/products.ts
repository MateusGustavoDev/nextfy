'use server'
import { getCollectionProductsQuery, getProductByHandleQuery, searchProductsQuery } from '../graphql/queries/products'
import { shopifyFetch } from './shopify-fetch'
import { GetCollectionProductsQuery, GetProductByHandleQuery, SearchProductsQuery } from '../types/storefront.generated'
import { CollectionType, ProductType, SearchResultType } from './types'

type GetCollectionProducts = {
  collection: string
  reverse?: boolean
  sortKey?: string
}

export async function getCollectionProducts({
  collection,
}: GetCollectionProducts): Promise<CollectionType | undefined> {
  const { data, errors } = await shopifyFetch<GetCollectionProductsQuery>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
    },
  })

  if (!data?.collection || errors) {
    return undefined
  }

  if (data.collection) {
    return data.collection
  }
}

export async function getProductByHandle({ handle }: { handle: string }): Promise<ProductType | undefined> {
  const { data, errors } = await shopifyFetch<GetProductByHandleQuery>({
    query: getProductByHandleQuery,
    variables: {
      handle: handle,
    },
  })

  if (!data?.product || errors) {
    return undefined
  }

  if (data.product) {
    return data.product
  }
}

export async function searchProducts(query: string, first: number): Promise<SearchResultType | undefined> {
  const { data, errors } = await shopifyFetch<SearchProductsQuery>({
    query: searchProductsQuery,
    variables: {
      query: query,
      first: first,
    },
  })

  if (!data?.search || errors) {
    return undefined
  }

  if (data.search) {
    return data.search.edges
  }
}

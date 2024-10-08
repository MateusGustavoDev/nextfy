import { getCollectionProductsQuery, getProductByHandleQuery, searchProductsQuery } from '../graphql/queries/products'
import { shopifyFetch } from './shopify-fetch'
import { GetCollectionProductsQuery, GetProductByHandleQuery, SearchProductsQuery } from '../types/storefront.generated'
import { CollectionProductType, ProductType } from './types'
import { removeEdgesAndNodes } from '@/lib/utils'

type GetCollectionProducts = {
  collection: string
  reverse?: boolean
  sortKey?: string
  first: number
}

export async function getCollectionProducts({
  collection,
  first,
}: GetCollectionProducts): Promise<CollectionProductType | undefined> {
  const { data, errors } = await shopifyFetch<GetCollectionProductsQuery>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      first: first,
    },
  })

  if (!data?.collection || errors) {
    return undefined
  }

  return {
    title: data.collection.title,
    products: removeEdgesAndNodes(data.collection.products),
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

  return data.product
}

import 'server-only'
import { getCollectionProductsQuery, getProductByHandleQuery } from '../graphql/queries/products'
import { shopifyFetch } from './shopify-fetch'
import { GetCollectionProductsQuery, GetProductByHandleQuery } from '../types/storefront.generated'
import { CollectionType, ProductType } from './types'

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

  if (data) {
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

  if (data) {
    return data.product
  }
}

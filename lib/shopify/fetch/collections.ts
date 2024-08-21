'use server'
import { getCollectionQuery } from '../graphql/queries/collections'
import { GetCollectionsQuery } from '../types/storefront.generated'
import { shopifyFetch } from './shopify-fetch'
import { CollectionsType } from './types'

export async function getCollections(): Promise<CollectionsType | undefined> {
  const { data, errors } = await shopifyFetch<GetCollectionsQuery>({
    query: getCollectionQuery,
  })

  if (!data?.collections || errors) {
    return undefined
  }

  if (data.collections) {
    return data.collections
  }
}

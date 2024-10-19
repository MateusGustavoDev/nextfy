import { TAGS } from '@/lib/constants'
import { getCollectionsQuery } from '@/lib/shopify/graphql/queries/collections'
import { GetCollectionsQuery } from '@/lib/shopify/types/storefront.generated'
import { shopifyFetch } from './shopify-fetch'
import { CollectionsType } from './types'

type GetCollections = {
  first: number
}

export async function getCollections({ first }: GetCollections): Promise<CollectionsType | undefined> {
  const { data, error } = await shopifyFetch<GetCollectionsQuery>({
    query: getCollectionsQuery,
    tags: [TAGS.collections],
    variables: {
      first: first,
    },
  })

  if (!data?.collections || error) {
    return undefined
  }

  const formattedData = data.collections.edges.map((data) => ({
    cursor: data.cursor,
    id: data.node.id,
    title: data.node.title,
    handle: data.node.handle,
  }))

  return { collections: formattedData }
}

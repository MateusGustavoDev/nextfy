'use server'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { SearchProductsType } from '@/lib/shopify/fetch/types'
import { searchProductsQuery } from '@/lib/shopify/graphql/queries/products'
import { SearchProductsQuery } from '@/lib/shopify/types/storefront.generated'
import { removeEdgesAndNodes } from '@/lib/utils'

type SearchProductsAction = {
  query: string
  cursor?: string
}

export async function searchProductsAction({
  query,
  cursor,
}: SearchProductsAction): Promise<SearchProductsType | undefined> {
  const { data, errors } = await shopifyFetch<SearchProductsQuery>({
    query: searchProductsQuery,
    variables: {
      query: query,
      cursor: cursor,
    },
  })

  if (!data?.search || errors) {
    return undefined
  }

  return {
    products: removeEdgesAndNodes(data.search),
    pageInfo: data.search.pageInfo,
  }
}

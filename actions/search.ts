'use server'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { ProductType } from '@/lib/shopify/fetch/types'
import { searchProductsQuery } from '@/lib/shopify/graphql/queries/products'
import { SearchProductsQuery } from '@/lib/shopify/types/storefront.generated'
import { removeEdgesAndNodes } from '@/lib/utils'

export async function searchProductsAction(query: string | null, first: number): Promise<ProductType[] | undefined> {
  if (!query) return

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
    return removeEdgesAndNodes(data.search)
  }
}

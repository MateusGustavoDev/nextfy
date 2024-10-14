'use server'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { ProductType } from '@/lib/shopify/fetch/types'
import { searchProductsQuery } from '@/lib/shopify/graphql/queries/products'
import { SearchProductsQuery } from '@/lib/shopify/types/storefront.generated'
import { PageInfo } from '@/lib/shopify/types/storefront.types'
import { removeEdgesAndNodes } from '@/lib/utils'

type SearchProducts = {
  products: ProductType[]
  pageInfo: PageInfo
}

type SearchProductsAction = {
  query: string | null
  numProducts: number
  cursor?: string
}

export async function searchProductsAction({
  query,
  numProducts,
  cursor,
}: SearchProductsAction): Promise<SearchProducts | undefined> {
  if (!query) return

  const { data, errors } = await shopifyFetch<SearchProductsQuery>({
    query: searchProductsQuery,
    variables: {
      query: query,
      first: numProducts,
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

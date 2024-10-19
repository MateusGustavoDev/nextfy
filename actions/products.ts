'use server'
import {
  getAllProductsQuery,
  getCollectionProductsQuery,
  getProductByHandleQuery,
} from '@/lib/shopify/graphql/queries/products'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import {
  GetCollectionProductsQuery,
  GetProductByHandleQuery,
  GetProductsAndVariantsQuery,
} from '@/lib/shopify/types/storefront.generated'
import { CollectionProductType, ProductType } from '@/lib/shopify/fetch/types'
import { removeEdgesAndNodes } from '@/lib/utils'
import { TAGS } from '@/lib/constants'
import { PageInfo } from '@/lib/shopify/types/storefront.types'

type GetCollectionProducts = {
  collection: string
  numProducts: number
  cursor?: string
}

export async function getCollectionProducts({
  collection,
  numProducts,
  cursor,
}: GetCollectionProducts): Promise<CollectionProductType | undefined> {
  const { data, error } = await shopifyFetch<GetCollectionProductsQuery>({
    query: getCollectionProductsQuery,
    tags: [TAGS.products],
    variables: {
      handle: collection,
      first: numProducts,
      cursor: cursor,
    },
  })

  if (!data?.collection || error) {
    return undefined
  }

  return {
    title: data.collection.title,
    products: removeEdgesAndNodes(data.collection.products),
    pageInfo: data.collection.products.pageInfo,
  }
}

export async function getProductByHandle({ handle }: { handle: string }): Promise<ProductType | undefined> {
  const { data, error } = await shopifyFetch<GetProductByHandleQuery>({
    query: getProductByHandleQuery,
    tags: [TAGS.products],
    variables: {
      handle: handle,
    },
  })

  if (!data?.product || error) {
    return undefined
  }

  return data.product
}

type GetAllProducts = {
  numProducts: number
  cursor?: string
}

type GetAllProductsType = {
  products: ProductType[]
  pageInfo: PageInfo
}

export async function getAllProducts({ numProducts, cursor }: GetAllProducts): Promise<GetAllProductsType | undefined> {
  const { data, error } = await shopifyFetch<GetProductsAndVariantsQuery>({
    query: getAllProductsQuery,
    tags: [TAGS.products],
    variables: {
      first: numProducts,
      cursor: cursor,
    },
  })

  if (!data?.products || error) {
    return undefined
  }

  return {
    products: removeEdgesAndNodes(data.products),
    pageInfo: data.products.pageInfo,
  }
}

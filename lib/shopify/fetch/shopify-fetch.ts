import { SHOPIFY_GRAPHQL_API_ENDPOINT } from '@/lib/constants'
const { SHOPIFY_STORE_DOMAIN } = process.env

const endpoint = `https://${SHOPIFY_STORE_DOMAIN}${SHOPIFY_GRAPHQL_API_ENDPOINT}`
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

export interface ResponseErrors {
  networkStatusCode?: number
  message?: string
  graphQLErrors?: any[]
  response?: Response
}

type Variables = object | undefined

export async function shopifyFetch<T>({
  cache = 'force-cache',
  headers,
  query,
  tags,
  variables,
}: {
  cache?: RequestCache
  headers?: HeadersInit
  query: string
  tags?: string[]
  variables?: Variables
}): Promise<{ errors: ResponseErrors | string | undefined; data: T | undefined }> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    })

    const body = await result.json()

    if (body.errors) {
      return {
        data: undefined,
        errors: { message: 'shopifyFetch error' },
      }
    }

    if (body.data) {
      return {
        data: body.data,
        errors: undefined,
      }
    }

    return {
      data: undefined,
      errors: { message: 'shopifyFetch error' },
    }
  } catch (error) {
    console.error('shopifyFetch error: ' + error)
    return {
      data: undefined,
      errors: { message: 'shopifyFetch error' },
    }
  }
}

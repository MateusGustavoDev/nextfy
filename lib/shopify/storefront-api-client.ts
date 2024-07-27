import { createStorefrontApiClient } from '@shopify/storefront-api-client'
const { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN } = process.env

export const client = createStorefrontApiClient({
  storeDomain: SHOPIFY_STORE_DOMAIN,
  apiVersion: '2023-10',
  publicAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

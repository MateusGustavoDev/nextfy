declare namespace NodeJS {
  interface ProcessEnv {
    SITE_NAME: string
    SHOPIFY_STORE_DOMAIN: string
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: string
    SHOPIFY_REVALIDATION_SECRET: string
  }
}

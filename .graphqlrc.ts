import {ApiType, shopifyApiProject} from '@shopify/api-codegen-preset';

export default {
  schema: 'https://shopify.dev/storefront-graphql-direct-proxy',
  documents: ['./lib/shopify/graphql/**/*.ts'],
  projects: {
    default: shopifyApiProject({
      apiType: ApiType.Storefront,
      documents: ['./lib/shopify/graphql/**/*.ts'],
      apiVersion: '2024-07',
      outputDir: './lib/shopify/types',
    }),
  },
};
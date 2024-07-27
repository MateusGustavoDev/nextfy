import {ApiType, shopifyApiProject} from '@shopify/api-codegen-preset';

export default {
  schema: 'https://shopify.dev/storefront-graphql-direct-proxy',
  documents: ['./lib/shopify/graphql/**/*.ts'],
  projects: {
    default: shopifyApiProject({
      apiType: ApiType.Storefront,
      apiVersion: '2023-10',
      outputDir: './lib/shopify/types',
    }),
  },
};
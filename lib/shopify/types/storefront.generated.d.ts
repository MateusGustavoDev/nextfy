/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type ShopQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ShopQuery = { shop: Pick<StorefrontTypes.Shop, 'name'> };

interface GeneratedQueryTypes {
  "\n  query shop {\n    shop {\n      name\n    }\n  }\n": {return: ShopQuery, variables: ShopQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}

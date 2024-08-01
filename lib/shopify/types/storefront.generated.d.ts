/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type ImageFragment = Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>;

export type ProductFragment = (
  Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
  & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
        & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
      ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
);

export type ShopQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ShopQuery = { shop: Pick<StorefrontTypes.Shop, 'name'> };

export type GetCollectionProductsQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
  sortKey?: StorefrontTypes.InputMaybe<StorefrontTypes.ProductCollectionSortKeys>;
  reverse?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Boolean']['input']>;
}>;


export type GetCollectionProductsQuery = { collection?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Collection, 'title'>
    & { products: { edges: Array<{ node: (
          Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
          & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
              ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
        ) }> } }
  )> };

interface GeneratedQueryTypes {
  "\n  query shop {\n    shop {\n      name\n    }\n  }\n": {return: ShopQuery, variables: ShopQueryVariables},
  "\n  query getCollectionProducts($handle: String!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean) {\n    collection(handle: $handle) {\n      title\n      products(sortKey: $sortKey, reverse: $reverse, first: 100) {\n        edges {\n          node {\n            ...product\n          }\n        }\n      }\n    }\n  }\n  \n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n": {return: GetCollectionProductsQuery, variables: GetCollectionProductsQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}

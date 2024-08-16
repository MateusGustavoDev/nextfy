/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type CartFragment = (
  Pick<StorefrontTypes.Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl' | 'totalQuantity'>
  & { lines: { edges: Array<{ node: (
        Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
        & { merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
            Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
            & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                  Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                  & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
          ) }
        ) }
      ) | (
        Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
        & { merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
            Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
            & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                  Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                  & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
          ) }
        ) }
      ) }> }, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>>, cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }
);

export type ImageFragment = Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>;

export type ProductFragment = (
  Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
  & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
        & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
      ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
);

export type CreateCartMutationVariables = StorefrontTypes.Exact<{
  cartInput?: StorefrontTypes.InputMaybe<StorefrontTypes.CartInput>;
}>;


export type CreateCartMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) }> }, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>>, cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }
    )> }> };

export type AddCartLinesMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput;
}>;


export type AddCartLinesMutation = { cartLinesAdd?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) }> }, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>>, cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'field' | 'message'>> }> };

export type RemoveFromCartMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lineIds: Array<StorefrontTypes.Scalars['ID']['input']> | StorefrontTypes.Scalars['ID']['input'];
}>;


export type RemoveFromCartMutation = { cartLinesRemove?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) }> }, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>>, cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }
    )> }> };

export type EditCartItemsMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineUpdateInput> | StorefrontTypes.CartLineUpdateInput;
}>;


export type EditCartItemsMutation = { cartLinesUpdate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
              ) }
            ) }
          ) }> }, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>>, cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }
    )> }> };

export type CartQueryQueryVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
}>;


export type CartQueryQuery = { cart?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl' | 'totalQuantity'>
    & { lines: { edges: Array<{ node: (
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
              Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
              & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                    & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                  ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
            ) }
          ) }
        ) | (
          Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
          & { merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
              Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
              & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                    & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
                  ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
            ) }
          ) }
        ) }> }, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>>, cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }
  )> };

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

export type GetProductByHandleQueryVariables = StorefrontTypes.Exact<{
  handle?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type GetProductByHandleQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
    & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url'>> }
        ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> } }
  )> };

interface GeneratedQueryTypes {
  "\n  query cartQuery($cartId: ID!) {\n    cart(id: $cartId) {\n      ...Cart\n    }\n  }\n  \n  fragment Cart on Cart {\n    id\n    createdAt\n    updatedAt\n    checkoutUrl\n    lines(first: 10) {\n      edges {\n        node {\n          id\n          quantity\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...Product\n              }\n            }\n          }\n        }\n      }\n    }\n    attributes {\n      key\n      value\n    }\n    cost {\n      totalAmount {\n        amount\n        currencyCode\n      }\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }\n    totalQuantity\n  }\n  \n  fragment Product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n\n": {return: CartQueryQuery, variables: CartQueryQueryVariables},
  "\n  query getCollectionProducts($handle: String!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean) {\n    collection(handle: $handle) {\n      title\n      products(sortKey: $sortKey, reverse: $reverse, first: 100) {\n        edges {\n          node {\n            ...Product\n          }\n        }\n      }\n    }\n  }\n  \n  fragment Product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n": {return: GetCollectionProductsQuery, variables: GetCollectionProductsQueryVariables},
  "\n  query getProductByHandle($handle: String) {\n    product(handle: $handle) {\n      ...Product\n    }\n  }\n  \n  fragment Product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n": {return: GetProductByHandleQuery, variables: GetProductByHandleQueryVariables},
}

interface GeneratedMutationTypes {
  "\n  mutation createCart($cartInput: CartInput) {\n    cartCreate(input: $cartInput) {\n      cart {\n        ...Cart\n      }\n    }\n  }\n  \n  fragment Cart on Cart {\n    id\n    createdAt\n    updatedAt\n    checkoutUrl\n    lines(first: 10) {\n      edges {\n        node {\n          id\n          quantity\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...Product\n              }\n            }\n          }\n        }\n      }\n    }\n    attributes {\n      key\n      value\n    }\n    cost {\n      totalAmount {\n        amount\n        currencyCode\n      }\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }\n    totalQuantity\n  }\n  \n  fragment Product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n\n": {return: CreateCartMutation, variables: CreateCartMutationVariables},
  "\n  mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...Cart\n      }\n\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n  \n  fragment Cart on Cart {\n    id\n    createdAt\n    updatedAt\n    checkoutUrl\n    lines(first: 10) {\n      edges {\n        node {\n          id\n          quantity\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...Product\n              }\n            }\n          }\n        }\n      }\n    }\n    attributes {\n      key\n      value\n    }\n    cost {\n      totalAmount {\n        amount\n        currencyCode\n      }\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }\n    totalQuantity\n  }\n  \n  fragment Product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n\n": {return: AddCartLinesMutation, variables: AddCartLinesMutationVariables},
  "\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...Cart\n      }\n    }\n  }\n  \n  fragment Cart on Cart {\n    id\n    createdAt\n    updatedAt\n    checkoutUrl\n    lines(first: 10) {\n      edges {\n        node {\n          id\n          quantity\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...Product\n              }\n            }\n          }\n        }\n      }\n    }\n    attributes {\n      key\n      value\n    }\n    cost {\n      totalAmount {\n        amount\n        currencyCode\n      }\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }\n    totalQuantity\n  }\n  \n  fragment Product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n\n": {return: RemoveFromCartMutation, variables: RemoveFromCartMutationVariables},
  "\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...Cart\n      }\n    }\n  }\n  \n  fragment Cart on Cart {\n    id\n    createdAt\n    updatedAt\n    checkoutUrl\n    lines(first: 10) {\n      edges {\n        node {\n          id\n          quantity\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...Product\n              }\n            }\n          }\n        }\n      }\n    }\n    attributes {\n      key\n      value\n    }\n    cost {\n      totalAmount {\n        amount\n        currencyCode\n      }\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }\n    totalQuantity\n  }\n  \n  fragment Product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n          image {\n            url\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...Image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...Image\n        }\n      }\n    }\n    tags\n    updatedAt\n  }\n  \n  fragment Image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n\n\n": {return: EditCartItemsMutation, variables: EditCartItemsMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}

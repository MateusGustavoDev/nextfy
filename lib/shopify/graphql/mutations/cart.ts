import { cartFragment } from '../fragments/cart'

export const createCartMutation = /* GraphQL */ `
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        ...Cart
      }
    }
  }
  ${cartFragment}
`

export const addCartLinesMutation = /* GraphQL */ `
  mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...Cart
      }

      userErrors {
        field
        message
      }
    }
  }
  ${cartFragment}
`
export const removeFromCartMutation = /* GraphQL */ `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...Cart
      }
    }
  }
  ${cartFragment}
`

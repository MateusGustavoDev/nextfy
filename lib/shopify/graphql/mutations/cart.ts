import { cartFragment } from '../fragments/cart'

export const createCartMutation = /* GraphQL */ `
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
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
      userErrors {
        field
        message
      }
    }
  }
  ${cartFragment}
`

export const editCartItemsMutation = /* GraphQL */ `
  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...Cart
      }
    }
  }
  ${cartFragment}
`

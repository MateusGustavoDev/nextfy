import { addCartLinesMutation, createCartMutation, editCartItemsMutation } from '@/lib/shopify/graphql/mutations/cart'
import { getCartQuery } from '@/lib/shopify/graphql/queries/cart'
import {
  AddCartLinesMutation,
  CartQueryQuery,
  CreateCartMutation,
  EditCartItemsMutation,
} from '../types/storefront.generated'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { TAGS } from '@/lib/constants'
import { CartType } from './types'

export async function createCart(): Promise<CartType | undefined> {
  const { data, errors } = await shopifyFetch<CreateCartMutation>({ query: createCartMutation })

  if (!data?.cartCreate?.cart || errors || data.cartCreate.userErrors[0]) {
    return undefined
  }

  const formattedLines = data.cartCreate.cart.lines.edges.map((item) => ({
    id: item.node.id,
    quantity: item.node.quantity,
    merchandise: {
      id: item.node.merchandise.id,
      title: item.node.merchandise.title,
      selectedOptions: item.node.merchandise.selectedOptions,
      product: item.node.merchandise.product,
    },
  }))

  return {
    id: data.cartCreate.cart.id,
    createdAt: data.cartCreate.cart.createdAt,
    updateAt: data.cartCreate.cart.updatedAt,
    checkoutUrl: data.cartCreate.cart.checkoutUrl,
    totalQuantity: data.cartCreate.cart.totalQuantity,
    cost: data.cartCreate.cart.cost,
    lines: formattedLines,
  }
}

export async function getCart(cartId: string): Promise<CartType | undefined> {
  const { data, errors } = await shopifyFetch<CartQueryQuery>({
    query: getCartQuery,
    variables: { cartId },
    tags: [TAGS.cart],
  })

  if (!data?.cart || errors) {
    return undefined
  }

  const formattedLines = data.cart.lines.edges.map((item) => ({
    id: item.node.id,
    quantity: item.node.quantity,
    merchandise: {
      id: item.node.merchandise.id,
      title: item.node.merchandise.title,
      selectedOptions: item.node.merchandise.selectedOptions,
      product: item.node.merchandise.product,
    },
  }))

  return {
    id: data.cart.id,
    createdAt: data.cart.createdAt,
    updateAt: data.cart.updatedAt,
    checkoutUrl: data.cart.checkoutUrl,
    totalQuantity: data.cart.totalQuantity,
    cost: data.cart.cost,
    lines: formattedLines,
  }
}

export async function addCartLine(cartId: string, merchandiseId: string): Promise<{ error: boolean }> {
  const { data, errors } = await shopifyFetch<AddCartLinesMutation>({
    query: addCartLinesMutation,
    variables: { cartId: cartId, lines: { merchandiseId: merchandiseId, quantity: 1 } },
    cache: 'no-store',
  })

  if (!data?.cartLinesAdd?.cart || errors || data.cartLinesAdd.userErrors[0]) {
    return { error: true }
  }

  if (data.cartLinesAdd.cart) {
    return { error: false }
  }

  return { error: true }
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<{ error: boolean }> {
  const { data, errors } = await shopifyFetch<EditCartItemsMutation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
    cache: 'no-store',
  })

  if (errors) {
    return { error: true }
  }

  if (data?.cartLinesUpdate?.cart) return { error: false }

  return { error: true }
}

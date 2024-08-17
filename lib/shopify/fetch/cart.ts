'use server'
import { cookies } from 'next/headers'
import {
  addCartLinesMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from '../graphql/mutations/cart'
import { getCartQuery } from '../graphql/queries/cart'
import {
  AddCartLinesMutation,
  CartQueryQuery,
  CreateCartMutation,
  EditCartItemsMutation,
  RemoveFromCartMutation,
} from '../types/storefront.generated'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { revalidateTag } from 'next/cache'
import { TAGS } from '@/lib/constants'
import { CartType } from './types'

export async function createCart(): Promise<CartType | undefined> {
  const { data, errors } = await shopifyFetch<CreateCartMutation>({ query: createCartMutation })

  if (!data?.cartCreate || errors || data.cartCreate.userErrors[0]) {
    return undefined
  }

  if (data.cartCreate.cart) {
    return data.cartCreate.cart
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

  if (data.cart) {
    return data.cart
  }
}

export async function addCartLine(cartId: string, merchandiseId: string): Promise<CartType | undefined> {
  const { data, errors } = await shopifyFetch<AddCartLinesMutation>({
    query: addCartLinesMutation,
    variables: { cartId: cartId, lines: { merchandiseId: merchandiseId, quantity: 1 } },
    cache: 'no-store',
  })

  if (!data?.cartLinesAdd?.cart || errors || data.cartLinesAdd.userErrors[0]) {
    return undefined
  }

  if (data.cartLinesAdd.cart) {
    return data.cartLinesAdd.cart
  }
}

export async function addProductToCart(merchandiseId: string): Promise<{ success: boolean }> {
  let cartId = cookies().get('cartId')?.value
  let cart: CartType | undefined

  if (cartId) {
    cart = await getCart(cartId)
  }

  if (!cartId || !cart) {
    cart = await createCart()
    cartId = cart?.id
    cookies().set('cartId', cartId as string)
  }

  if (!cartId) {
    return { success: false }
  }

  const data = await addCartLine(cartId, merchandiseId)

  if (data) {
    revalidateTag(TAGS.cart)
    return { success: true }
  }

  return { success: false }
}

export async function removeCartItem(cartId: string, lineId: string): Promise<{ success: boolean }> {
  const { data, errors } = await shopifyFetch<RemoveFromCartMutation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds: lineId,
    },
  })

  if (!data?.cartLinesRemove || errors || data.cartLinesRemove.userErrors[0]) {
    return { success: false }
  }

  if (data.cartLinesRemove.cart) {
    revalidateTag(TAGS.cart)
    return { success: true }
  }

  return { success: false }
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<{ success: boolean }> {
  const { data, errors } = await shopifyFetch<EditCartItemsMutation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
    cache: 'no-store',
  })

  if (errors) {
    return { success: false }
  }

  if (data?.cartLinesUpdate?.cart) return { success: true }

  return { success: false }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    lineId: string
    variantId: string
    quantity: number
  },
): Promise<{ success: boolean }> {
  const cartId = cookies().get('cartId')?.value

  if (!cartId) {
    return { success: false }
  }

  const { lineId, variantId, quantity } = payload

  if (quantity === 0) {
    await removeCartItem(cartId, lineId)
    revalidateTag(TAGS.cart)
    return { success: true }
  }

  const { success } = await updateCart(cartId, [
    {
      id: lineId,
      merchandiseId: variantId,
      quantity,
    },
  ])

  if (success) {
    revalidateTag(TAGS.cart)
    return { success: true }
  }

  return { success: false }
}

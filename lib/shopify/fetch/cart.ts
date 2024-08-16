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

// Tratar os userErros

export async function createCart() {
  const { data, errors } = await shopifyFetch<CreateCartMutation>({ query: createCartMutation })

  if (!data?.cartCreate || errors) {
    return undefined
  }

  if (data) return data.cartCreate.cart
}

export async function getCart(cartId: string) {
  const { data, errors } = await shopifyFetch<CartQueryQuery>({
    query: getCartQuery,
    variables: { cartId },
    tags: [TAGS.cart],
  })

  if (!data?.cart || errors) {
    return undefined
  }

  if (data) {
    return data.cart
  }
}

export async function addCartLine(cartId: string, merchandiseId: string) {
  const { data, errors } = await shopifyFetch<AddCartLinesMutation>({
    query: addCartLinesMutation,
    variables: { cartId: cartId, lines: { merchandiseId: merchandiseId, quantity: 1 } },
    cache: 'no-store',
  })

  if (!data?.cartLinesAdd || errors) {
    return undefined
  }

  if (data) {
    return data
  }
}

export async function addProductToCart(merchandiseId: string) {
  let cartId = cookies().get('cartId')?.value
  let cart: CartType

  if (cartId) {
    cart = await getCart(cartId)
  }

  if (!cartId || !cart) {
    cart = await createCart()
    cartId = cart?.id
    cookies().set('cartId', cartId as string)
  }

  if (!cartId) return null

  await addCartLine(cartId, merchandiseId)
  revalidateTag(TAGS.cart)
}

export async function removeCartItem(cartId: string, lineId: string) {
  const { data, errors } = await shopifyFetch<RemoveFromCartMutation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds: lineId,
    },
  })

  if (!data?.cartLinesRemove || errors) {
    return undefined
  }

  if (data) {
    revalidateTag(TAGS.cart)
    return data
  }
}

export async function updateCart(cartId: string, lines: { id: string; merchandiseId: string; quantity: number }[]) {
  const { data, errors } = await shopifyFetch<EditCartItemsMutation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
    cache: 'no-store',
  })

  if (errors) {
    console.log('Erro em updateCart')
    return null
  }

  if (data) return data.cartLinesUpdate?.cart
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    lineId: string
    variantId: string
    quantity: number
  },
) {
  const cartId = cookies().get('cartId')?.value

  if (!cartId) {
    return null
  }

  const { lineId, variantId, quantity } = payload

  try {
    if (quantity === 0) {
      await removeCartItem(cartId, lineId)
      revalidateTag(TAGS.cart)
      return
    }

    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ])
    revalidateTag(TAGS.cart)
  } catch (e) {
    return 'Error updating item quantity'
  }
}

'use server'
import { cookies } from 'next/headers'
import { addCartLinesMutation, createCartMutation, removeFromCartMutation } from '../graphql/mutations/cart'
import { getCartQuery } from '../graphql/queries/cart'
import {
  AddCartLinesMutation,
  CartQueryQuery,
  CreateCartMutation,
  RemoveFromCartMutation,
} from '../types/storefront.generated'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { revalidateTag } from 'next/cache'
import { TAGS } from '@/lib/constants'

// Tratar os userErros

export async function createCart() {
  const { data, errors } = await shopifyFetch<CreateCartMutation>({ query: createCartMutation })

  if (!data?.cartCreate || errors) {
    return undefined
  }

  if (data) {
    return data.cartCreate
  }
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
    return data
  }
}

export async function addCartLine(cartId: string, merchandiseId: string) {
  const { data, errors } = await shopifyFetch<AddCartLinesMutation>({
    query: addCartLinesMutation,
    cache: 'no-store',
    variables: { cartId: cartId, lines: { merchandiseId: merchandiseId, quantity: 1 } },
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
  let cart: CartQueryQuery | undefined

  if (cartId) {
    cart = await getCart(cartId)
  }

  if (!cartId || !cart) {
    cart = await createCart()
    cartId = cart?.cart?.id
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

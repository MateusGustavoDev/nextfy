'use server'
import { TAGS } from '@/lib/constants'
import { addCartLine, createCart, getCart, updateCart } from '@/lib/shopify/fetch/cart'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { CartType } from '@/lib/shopify/fetch/types'
import { removeFromCartMutation } from '@/lib/shopify/graphql/mutations/cart'
import { RemoveFromCartMutation } from '@/lib/shopify/types/storefront.generated'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export async function addProductToCartAction(merchandiseId: string): Promise<{ error: boolean }> {
  let cartId = cookies().get('cartId')?.value
  let cart: CartType | undefined

  if (cartId) {
    cart = await getCart(cartId)
  }

  if (!cartId || !cart) {
    cart = await createCart()
    if (cart) {
      cartId = cart.id
      cookies().set('cartId', cartId)
    }
  }

  if (!cartId) {
    return { error: true }
  }

  const { error } = await addCartLine(cartId, merchandiseId)

  if (error) {
    return { error: true }
  }

  revalidateTag(TAGS.cart)
  return { error: false }
}

export async function updateItemQuantityAction(payload: {
  lineId: string
  variantId: string
  quantity: number
}): Promise<{ error: boolean }> {
  const cartId = cookies().get('cartId')?.value

  if (!cartId) {
    return { error: true }
  }

  const { lineId, variantId, quantity } = payload

  if (quantity <= 0) {
    await removeCartItemAction(cartId, lineId)
    revalidateTag(TAGS.cart)
    return { error: false }
  }

  const { error } = await updateCart(cartId, [
    {
      id: lineId,
      merchandiseId: variantId,
      quantity,
    },
  ])

  if (error) {
    return { error: false }
  }

  revalidateTag(TAGS.cart)
  return { error: false }
}

export async function removeCartItemAction(cartId: string, lineId: string) {
  const { data } = await shopifyFetch<RemoveFromCartMutation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds: lineId,
    },
  })

  if (data?.cartLinesRemove?.cart) {
    revalidateTag(TAGS.cart)
  }
}

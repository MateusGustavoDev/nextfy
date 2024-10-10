'use server'
import { cartIdCookie, ERROR_MESSAGES, TAGS } from '@/lib/constants'
import { addCartLine, createCart, getCart, updateCart } from '@/lib/shopify/fetch/cart'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { ActionStatusType, CartType } from '@/lib/shopify/fetch/types'
import { removeFromCartMutation } from '@/lib/shopify/graphql/mutations/cart'
import { RemoveFromCartMutation } from '@/lib/shopify/types/storefront.generated'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export async function addProductToCartAction(merchandiseId: string): Promise<ActionStatusType> {
  let cartId = cookies().get(cartIdCookie)?.value
  let cart: CartType | undefined

  if (cartId) {
    cart = await getCart(cartId)
  }

  if (!cartId || !cart) {
    cart = await createCart()
    if (cart) {
      cartId = cart.id
      cookies().set(cartIdCookie, cartId, { maxAge: 604800 })
    }
  }

  if (!cartId) {
    return { success: false, message: ERROR_MESSAGES.addProductToCart }
  }

  const { success, message } = await addCartLine(cartId, merchandiseId)

  if (!success) {
    return { success: false, message: message }
  }

  revalidateTag(TAGS.cart)
  return { success: true }
}

type Payload = {
  lineId: string
  variantId: string
  quantity: number
}

export async function updateItemQuantityAction({ lineId, variantId, quantity }: Payload): Promise<ActionStatusType> {
  const cartId = cookies().get(cartIdCookie)?.value

  if (!cartId) {
    return { success: false, message: ERROR_MESSAGES.updateItemQuantity }
  }

  if (quantity <= 0) {
    await removeCartItemAction(cartId, lineId)
    revalidateTag(TAGS.cart)
    return { success: true }
  }

  const { success, message } = await updateCart(cartId, [{ id: lineId, merchandiseId: variantId, quantity }])

  if (!success) {
    return { success: false, message: message }
  }

  revalidateTag(TAGS.cart)
  return { success: true }
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

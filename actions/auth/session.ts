'use server'
import 'server-only'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { verifyCustomerAccessToken } from '@/lib/shopify/graphql/queries/customer'
import { CustomerMetafieldsQuery } from '@/lib/shopify/types/storefront.generated'

export async function createSession(accessToken: string, expiresAt: string) {
  const cookieStore = await cookies()

  cookieStore.set({
    name: 'customerAuth',
    value: accessToken,
    httpOnly: true,
    secure: true,
    path: '/',
  })

  redirect('/')
}

export async function deleteSession() {
  const cookieStore = await cookies()

  cookieStore.delete('customerAuth')

  redirect('/')
}

export async function verifySession() {
  const cookieStore = await cookies()
  const customerAccessToken = cookieStore.get('customerAuth')

  if (!customerAccessToken) redirect('/login')

  const { data } = await shopifyFetch<CustomerMetafieldsQuery>({
    query: verifyCustomerAccessToken,
    variables: {
      customerAccessToken: customerAccessToken.value,
    },
  })

  if (data?.customer) return { isAuth: true, userId: data.customer.id }

  redirect('/login')
}

export async function verifySessionMiddleware(customerAccessToken: string | undefined) {
  if (!customerAccessToken) return { isAuth: false }

  const { data } = await shopifyFetch<CustomerMetafieldsQuery>({
    query: verifyCustomerAccessToken,
    variables: {
      customerAccessToken: customerAccessToken,
    },
  })

  if (data?.customer) return { isAuth: true }

  return { isAuth: false }
}

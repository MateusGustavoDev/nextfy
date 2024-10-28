'use server'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { getCustomerOrdersQuery } from '@/lib/shopify/graphql/queries/customer'
import { GetCustomerOrdersQuery } from '@/lib/shopify/types/storefront.generated'
import { removeEdgesAndNodes } from '@/lib/utils'

export async function getCustomerOrdersAction(customerAccessToken: string) {
  const { data, errors } = await shopifyFetch<GetCustomerOrdersQuery>({
    query: getCustomerOrdersQuery,
    variables: {
      customerAccessToken: customerAccessToken,
    },
  })

  if (!data?.customer || errors) return undefined

  return {
    id: data.customer.id,
    firstName: data.customer.firstName,
    lastName: data.customer.lastName,
    email: data.customer.email,
    orders: removeEdgesAndNodes(data.customer.orders),
  }
}

'use server'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { getCustomerOrdersQuery } from '@/lib/shopify/graphql/queries/customer'
import { GetCustomerOrdersQuery } from '@/lib/shopify/types/storefront.generated'

export async function getCustomerOrdersAction(customerAccessToken: string) {
  const { data, errors } = await shopifyFetch<GetCustomerOrdersQuery>({
    query: getCustomerOrdersQuery,
    variables: {
      customerAccessToken: customerAccessToken,
    },
  })

  if (!data?.customer || errors) return undefined

  const formattedOrder = data.customer.orders.edges.map((item) => ({
    orderNumber: item.node.orderNumber,
    totalPrice: item.node.totalPrice,
    subtotalPrice: item.node.subtotalPrice,
    totalShippingPrice: item.node.totalShippingPrice,
    totalTax: item.node.totalTax,
    processedAt: item.node.processedAt,
    statusUrl: item.node.statusUrl,
    successfulFulfillments: item.node.successfulFulfillments?.map((item) => ({
      trackingCompany: item.trackingCompany,
      trackingInfo: item.trackingInfo,
    })),
    lineItems: item.node.lineItems.edges.map((item) => ({
      title: item.node.title,
      quantity: item.node.quantity,
      variant: {
        id: item.node.variant?.id,
        title: item.node.variant?.title,
        image: item.node.variant?.image,
        price: item.node.variant?.price,
        compareAtPrice: item.node.variant?.compareAtPrice,
      },
    })),
  }))

  return formattedOrder
}

import { customerInfoFragment } from '../fragments/customer'
import { pageInfoFragment } from '../fragments/page-info'

export const getCustomerInfoQuery = /* GraphQL */ `
  query CustomerMetafields($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${customerInfoFragment}
`
export const getCustomerOrdersQuery = /* GraphQL */ `
  query getCustomerOrders($customerAccessToken: String!, $numOfOrders: Int) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: $numOfOrders) {
        edges {
          node {
            orderNumber
            totalPrice {
              amount
              currencyCode
            }
            subtotalPrice {
              amount
              currencyCode
            }
            totalShippingPrice {
              amount
              currencyCode
            }
            totalTax {
              amount
              currencyCode
            }
            fulfillmentStatus
            processedAt
            lineItems(first: 10) {
              edges {
                node {
                  title
                  quantity
                  variant {
                    id
                    title
                    image {
                      url
                      altText
                    }
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
            statusUrl
            customerUrl
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${pageInfoFragment}
`

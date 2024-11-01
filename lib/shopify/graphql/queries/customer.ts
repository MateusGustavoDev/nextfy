import { customerInfoFragment } from '../fragments/customer'

export const verifyCustomerAccessToken = /* GraphQL */ `
  query CustomerMetafields($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
    }
  }
`
export const getCustomerOrdersQuery = /* GraphQL */ `
  query getCustomerOrders($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
      orders(first: 5) {
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
            successfulFulfillments {
              trackingCompany
              trackingInfo {
                number
                url
              }
            }
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
          }
        }
      }
    }
  }
  ${customerInfoFragment}
`

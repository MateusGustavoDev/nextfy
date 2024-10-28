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
          }
        }
      }
    }
  }
  ${customerInfoFragment}
`

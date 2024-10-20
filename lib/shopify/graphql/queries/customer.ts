export const verifyCustomerAccessToken = /* GraphQL */ `
  query CustomerMetafields($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
    }
  }
`

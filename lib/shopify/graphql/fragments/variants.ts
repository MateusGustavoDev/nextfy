export const ProductVariantFragment = /* GraphQL */ `
  fragment ProductVariant on ProductVariantConnection {
    edges {
      node {
        id
        title
        availableForSale
        quantityAvailable
        selectedOptions {
          name
          value
        }
        price {
          amount
          currencyCode
        }
        image {
          url
        }
      }
    }
  }
`

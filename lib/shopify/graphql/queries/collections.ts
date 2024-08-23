export const getCollectionQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 10) {
      edges {
        cursor
        node {
          id
          title
          handle
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

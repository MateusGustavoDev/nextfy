export const getCollectionQuery = /* GraphQL */ `
  query getCollections($first: Int) {
    collections(first: $first) {
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

export const getCollectionsQuery = /* GraphQL */ `
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
    }
  }
`

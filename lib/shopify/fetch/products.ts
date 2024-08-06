import 'server-only'
import { getCollectionProductsQuery, getProductByHandleQuery } from '../graphql/queries/products'
import { client } from '../storefront-api-client'

type GetCollectionProducts = {
  collection: string
  reverse?: boolean
  sortKey?: string
}

export async function getCollectionProducts({ collection }: GetCollectionProducts) {
  const { data, errors } = await client.request(getCollectionProductsQuery, {
    variables: {
      handle: collection,
    },
  })

  if (!data?.collection || errors) {
    return undefined
  }

  if (data) {
    return data
  }
}

export async function getProductByHandle({ handle }: { handle: string }) {
  const { data, errors } = await client.request(getProductByHandleQuery, {
    variables: {
      handle: handle,
    },
  })

  if (!data?.product || errors) {
    return undefined
  }

  if (data) {
    return data
  }
}

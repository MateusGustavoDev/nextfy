import 'server-only'
import { getCollectionProductsQuery } from '../graphql/queries/product'
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

  if (errors) {
    return {
      data: undefined,
      errorMessage: errors.message,
    }
  }

  if (!data?.collection) {
    return {
      data: undefined,
      errorMessage: `Collection não encontrada: ${collection}`,
    }
  }

  if (data) {
    return {
      data: data,
      errorMessage: undefined,
    }
  }

  return {
    data: undefined,
    errorMessage: `Falha ao buscar a collection: ${collection}`,
  }
}

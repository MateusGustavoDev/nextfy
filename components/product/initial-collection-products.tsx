import { notFound } from 'next/navigation'
import { CollectionProducts } from './collection-products'
import { getCollectionProducts } from '@/actions/products'

export async function InitialCollectionProducts({ handle }: { handle: string }) {
  const collection = await getCollectionProducts({ collection: handle })

  if (!collection) notFound()

  return <CollectionProducts collection={collection} />
}

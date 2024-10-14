import { notFound } from 'next/navigation'
import { CollectionProducts } from './collection-products'
import { Wrapper } from './wrapper'
import { getCollectionProducts } from '@/actions/products'

export async function InitialCollectionProducts({ handle }: { handle: string }) {
  const collection = await getCollectionProducts({ collection: handle, numProducts: 1 })

  if (!collection) notFound()

  return (
    <Wrapper>
      <CollectionProducts collection={collection} numProducts={1} />
    </Wrapper>
  )
}

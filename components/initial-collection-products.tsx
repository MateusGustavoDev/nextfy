import { notFound } from 'next/navigation'
import { CollectionProducts } from './collection-products'
import { Wrapper } from './wrapper'
import { getCollectionProducts } from '@/actions/products'

export async function InitialCollectionProducts({ handle }: { handle: string }) {
  const collection = await getCollectionProducts({ collection: handle })

  if (!collection) notFound()

  return (
    <Wrapper>
      <CollectionProducts collection={collection} />
    </Wrapper>
  )
}

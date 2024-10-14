import { notFound } from 'next/navigation'
import { CollectionProducts } from './collection-products'
import { Wrapper } from './wrapper'
import { getCollectionProducts } from '@/actions/products'

export async function InitialCollectionProducts({ handle }: { handle: string }) {
  const numberOfProducts = 3
  const collection = await getCollectionProducts({ collection: handle, numProducts: numberOfProducts })

  if (!collection) notFound()

  return (
    <Wrapper>
      <CollectionProducts collection={collection} numProducts={numberOfProducts} />
    </Wrapper>
  )
}

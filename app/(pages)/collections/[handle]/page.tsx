import { Wrapper } from '@/components/wrapper'
import { getCollectionProducts } from '@/actions/products'
import { CollectionProducts } from '../../../../components/collection-products'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
const { SITE_NAME } = process.env

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.handle} | ${SITE_NAME}`,
  }
}

interface Props {
  params: { handle: string }
}

export default async function Collection({ params }: Props) {
  return (
    <Suspense fallback={<span className="text-3xl text-black">Carregando...</span>}>
      <InitialCollectionProducts handle={params.handle} />
    </Suspense>
  )
}

export async function InitialCollectionProducts({ handle }: { handle: string }) {
  const collection = await getCollectionProducts({ collection: handle, numProducts: 1 })

  if (!collection) notFound()

  return (
    <Wrapper>
      <CollectionProducts collection={collection} numProducts={1} />
    </Wrapper>
  )
}

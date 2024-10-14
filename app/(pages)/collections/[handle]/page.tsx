import { InitialCollectionProducts } from '@/components/initial-collection-products'
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

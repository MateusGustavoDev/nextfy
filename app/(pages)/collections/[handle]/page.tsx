import { InitialCollectionProducts } from '@/components/initial-collection-products'
import { ProductListSkeleton } from '@/components/skeletons/product-list'
import { Suspense } from 'react'
const { SITE_NAME } = process.env

export async function generateMetadata({ params }: Props) {
  const handle = (await params).handle

  return {
    title: `${handle} | ${SITE_NAME}`,
  }
}

interface Props {
  params: Promise<{ handle: string }>
}

export default async function Collection({ params }: Props) {
  const handle = (await params).handle

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <div className="mt-10">
        <InitialCollectionProducts handle={handle} />
      </div>
    </Suspense>
  )
}

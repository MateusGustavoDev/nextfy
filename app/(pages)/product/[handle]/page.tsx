import { Product } from '@/components/product/product'
import { getProductByHandle } from '@/actions/products'
import { Suspense } from 'react'
import { LoaderCircle } from 'lucide-react'
const { SITE_NAME } = process.env

export async function generateMetadata({ params }: Props) {
  const handle = (await params).handle
  const product = await getProductByHandle({ handle: handle })

  return {
    title: `${product?.title} | ${SITE_NAME}`,
  }
}

interface Props {
  params: Promise<{ handle: string }>
}

export default async function ProductPage({ params }: Props) {
  const handle = (await params).handle

  return (
    <div className="mt-10 w-full">
      <Suspense fallback={<LoaderCircle size={50} className="m-auto animate-spin" />}>
        <Product handle={handle} />
      </Suspense>
    </div>
  )
}

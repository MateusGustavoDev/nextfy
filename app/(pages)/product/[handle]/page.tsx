import { Product } from '@/components/product/product'
import { getProductByHandle } from '@/actions/products'
import { Suspense } from 'react'
import { LoaderCircle } from 'lucide-react'
const { SITE_NAME } = process.env

export async function generateMetadata({ params }: Props) {
  const product = await getProductByHandle({ handle: params.handle })

  return {
    title: `${product?.title} | ${SITE_NAME}`,
  }
}

interface Props {
  params: { handle: string }
}

export default async function ProductPage({ params }: Props) {
  return (
    <div className="mt-10 w-full">
      <Suspense fallback={<LoaderCircle size={50} className="m-auto animate-spin" />}>
        <Product handle={params.handle} />
      </Suspense>
    </div>
  )
}

import { Product } from '@/components/product/product'
import { getProductByHandle } from '@/lib/shopify/fetch/products'
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
  const product = await getProductByHandle({ handle: params.handle })

  return (
    <div className="w-full">
      {product && <Product product={product} />}
      <div className="mt-10">{/* <Collection /> */}</div>
    </div>
  )
}

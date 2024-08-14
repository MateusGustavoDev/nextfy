import { Product } from '../components/product/product'
import { getProductByHandle } from '@/lib/shopify/fetch/products'

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle({ handle: params.handle })

  return (
    <div className="w-full">
      {product && <Product product={product} />}
      <div className="mt-10">{/* <Collection /> */}</div>
    </div>
  )
}

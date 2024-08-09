import { ProductItem } from '../components/product/product-item'
import { getProductByHandle } from '@/lib/shopify/fetch/products'

export default async function Product({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle({ handle: params.handle })

  return (
    <div className="w-full">
      {product && <ProductItem product={product} />}
      <div className="mt-10">{/* <Collection /> */}</div>
    </div>
  )
}

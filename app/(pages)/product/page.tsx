import { Collection } from '@/components/collection'
import { ProductItem } from '@/components/product'

export default function Product() {
  return (
    <div className="w-full">
      <ProductItem />
      <div className="mt-10">
        <Collection />
      </div>
    </div>
  )
}

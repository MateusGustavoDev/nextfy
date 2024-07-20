import { Collection } from '@/components/collection'
import { Product } from '@/components/product'

export default function ProductPage() {
  return (
    <div className="m-auto max-w-screen-wrapper px-6">
      <Product />
      <div className="mt-10">
        <Collection />
      </div>
    </div>
  )
}

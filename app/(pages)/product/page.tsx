import { Collection } from '@/components/collection'
import { Product } from '@/components/product'
import { Wrapper } from '@/components/wrapper'

export default function ProductPage() {
  return (
    <Wrapper>
      <div className="w-full px-6">
        <Product />
        <div className="mt-10">
          <Collection />
        </div>
      </div>
    </Wrapper>
  )
}

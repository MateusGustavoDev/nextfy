import { Collection } from '@/components/collection'
import { ProductItem } from '@/components/product'
import { Wrapper } from '@/components/wrapper'

export default function Product() {
  return (
    <Wrapper>
      <div className="w-full px-6">
        <ProductItem />
        <div className="mt-10">
          <Collection />
        </div>
      </div>
    </Wrapper>
  )
}

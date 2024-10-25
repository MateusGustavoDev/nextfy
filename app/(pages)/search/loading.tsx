import { ProductListSkeleton } from '@/components/skeletons/product-list'
import { Wrapper } from '@/components/wrapper'

export default function Loading() {
  return (
    <Wrapper>
      <div className="w-full">
        <div className="items-between mt-10 flex w-full gap-6">
          <ProductListSkeleton />
        </div>
      </div>
    </Wrapper>
  )
}

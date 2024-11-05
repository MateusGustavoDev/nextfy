import { Wrapper } from '../wrapper'
import { ProductListSkeleton } from './product-list'

export function SearchPageLayoutSkeleton() {
  return (
    <Wrapper className="mt-10">
      <ProductListSkeleton />
    </Wrapper>
  )
}

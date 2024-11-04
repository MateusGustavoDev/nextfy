import { ReactNode, Suspense } from 'react'
import ChildrenWrapper from './children-wrapper'
import { Wrapper } from '@/components/wrapper'
import { ProductListSkeleton } from '@/components/skeletons/product-list'

export default function SearchPageLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<SearchPageLayoutSkeleton />}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Suspense>
  )
}

export function SearchPageLayoutSkeleton() {
  return (
    <Wrapper className="mt-10">
      <ProductListSkeleton />
    </Wrapper>
  )
}

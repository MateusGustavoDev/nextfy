import { ReactNode, Suspense } from 'react'
import ChildrenWrapper from './children-wrapper'
import { SearchPageLayoutSkeleton } from '@/components/skeletons/search'

export default function SearchPageLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<SearchPageLayoutSkeleton />}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Suspense>
  )
}

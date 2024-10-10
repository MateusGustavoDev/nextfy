import { Wrapper } from '@/components/wrapper'
import { Suspense } from 'react'
import { SearchResults } from './components/search-results'

export default function Search() {
  return (
    <Wrapper>
      <div className="w-full">
        <div className="items-between mt-10 flex w-full gap-6">
          {/* <div className="shrink-0">
        <Filter />
      </div> */}
          <Suspense fallback={<span className="text-black">Carregando...</span>}>
            <SearchResults />
          </Suspense>
        </div>
      </div>
    </Wrapper>
  )
}

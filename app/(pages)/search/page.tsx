import { Wrapper } from '@/components/wrapper'
import { Suspense } from 'react'
import { SearchResults } from '@/components/search-results'

export default async function Search() {
  return (
    <Wrapper>
      <div className="w-full">
        <div className="items-between mt-10 flex w-full gap-6">
          <Suspense fallback={<span className="text-black">Carregando...</span>}>
            <SearchResults />
          </Suspense>
        </div>
      </div>
    </Wrapper>
  )
}

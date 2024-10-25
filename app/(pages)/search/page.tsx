import { Wrapper } from '@/components/wrapper'
import { SearchResults } from '@/components/search-results'
import { searchProductsAction } from '@/actions/search'

type SearchParams = Promise<{ query: string | undefined }>

export default async function Search(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const query = searchParams.query
  const data = await searchProductsAction({ query: query ? query : '' })

  return (
    <Wrapper>
      <div className="w-full">
        <div className="items-between mt-10 flex w-full gap-6">
          <SearchResults data={data} query={query} />
        </div>
      </div>
    </Wrapper>
  )
}

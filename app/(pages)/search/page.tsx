import { SearchResults } from '@/components/search-results'
import { searchProductsAction } from '@/actions/search'

type SearchParams = Promise<{ query: string | undefined }>

export default async function SearchPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const query = searchParams.query
  const data = await searchProductsAction({ query: query ? query : '' })

  return <SearchResults data={data} query={query} />
}

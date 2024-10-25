'use client'
import { notFound } from 'next/navigation'
import { searchProductsAction } from '@/actions/search'
import { useState } from 'react'
import { SearchProductsType } from '@/lib/shopify/fetch/types'
import { ProductList } from '@/components/product-list'

interface SearchResultsProps {
  data: SearchProductsType | undefined
  query: string | undefined
}

export function SearchResults({ data, query }: SearchResultsProps) {
  if (!data) notFound()
  const [products, setProducts] = useState(data.products)
  const [endCursor, setEndCursor] = useState(data.pageInfo.endCursor)
  const [hasNextPage, setHasNextPage] = useState(data.pageInfo.hasNextPage)

  async function handleOnLoadMore() {
    const data = await searchProductsAction({
      query: query ? query : '',
      cursor: endCursor ? endCursor : 'null',
    })

    if (data) {
      setProducts([...products, ...data.products])
      setEndCursor(data.pageInfo.endCursor)
      setHasNextPage(data.pageInfo.hasNextPage)
    }
  }

  if (products && products?.length <= 0) {
    return (
      <div className="m-auto my-10 w-max text-black">
        Nenhum resultado para: <strong>{query}</strong>
      </div>
    )
  }

  return <ProductList products={products} onLoadMore={handleOnLoadMore} hasNextPage={hasNextPage} />
}

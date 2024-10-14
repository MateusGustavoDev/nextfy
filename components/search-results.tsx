'use client'
import { useSearchParams } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
import { searchProductsAction } from '@/actions/search'
import { useEffect, useState, useTransition } from 'react'
import { ProductType } from '@/lib/shopify/fetch/types'
import { ProductList } from '@/components/product-list'
import { getAllProducts } from '@/actions/products'

export function SearchResults() {
  const params = useSearchParams()
  const queryParams = params.get('query')
  const [products, setProducts] = useState<ProductType[] | null>(null)
  const [endCursor, setEndCursor] = useState<string>('')
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isPending, startTransition] = useTransition()
  const numberOfProducts = 3

  useEffect(() => {
    if (!queryParams) {
      startTransition(async () => {
        const data = await getAllProducts({ numProducts: numberOfProducts })

        if (data) {
          setProducts(data.products)
          setEndCursor(data?.pageInfo.endCursor ? data.pageInfo.endCursor : '')
          setHasNextPage(data.pageInfo.hasNextPage)
        }
      })
    } else {
      startTransition(async () => {
        const data = await searchProductsAction({ query: queryParams, numProducts: numberOfProducts })

        if (data) {
          setProducts(data?.products)
          setEndCursor(data?.pageInfo.endCursor ? data.pageInfo.endCursor : '')
          setHasNextPage(data.pageInfo.hasNextPage)
        }
      })
    }
  }, [queryParams])

  async function handleOnLoadMore() {
    if (!queryParams) {
      const data = await getAllProducts({ numProducts: numberOfProducts, cursor: endCursor })

      if (data) {
        setProducts(products ? [...products, ...data.products] : products)
        setEndCursor(data?.pageInfo.endCursor ? data.pageInfo.endCursor : '')
        setHasNextPage(data.pageInfo.hasNextPage)
      }
    } else {
      const data = await searchProductsAction({ query: queryParams, numProducts: numberOfProducts, cursor: endCursor })

      if (data) {
        setProducts(products ? [...products, ...data.products] : null)
        setEndCursor(data.pageInfo.endCursor ? data.pageInfo.endCursor : '')
        setHasNextPage(data.pageInfo.hasNextPage)
      }
    }
  }

  if (!products) return null

  if (isPending) return <LoaderCircle size={30} className="m-auto my-10 animate-spin text-black" />

  if (products && products?.length <= 0) {
    return (
      <div className="m-auto my-10 w-max text-black">
        Nenhum resultado para: <strong>{queryParams}</strong>
      </div>
    )
  }

  return <ProductList products={products} onLoadMore={handleOnLoadMore} hasNextPage={hasNextPage} />
}

'use client'
import { useSearchParams } from 'next/navigation'
import { ProductCard } from '@/components/categories/product-card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { LoaderCircle } from 'lucide-react'
import { searchProductsAction } from '@/actions/search'
import { useEffect, useState } from 'react'
import { ProductType } from '@/lib/shopify/fetch/types'

export function SearchResults() {
  const params = useSearchParams()
  const queryParams = params.get('query')
  const [pending, setPending] = useState(true)
  const [products, setProducts] = useState<ProductType[] | null>(null)

  useEffect(() => {
    searchProductsAction(queryParams, 5).then((data) => {
      setPending(false)
      setProducts(data ? data : null)
    })
  }, [queryParams])

  if (pending) return <LoaderCircle size={30} className="m-auto my-10 animate-spin text-black" />

  if (products && products?.length <= 0)
    return (
      <div className="m-auto my-10 w-max text-black">
        Nenhum resultado para <strong>{queryParams}</strong>
      </div>
    )

  return (
    <div>
      <ul className="flex w-full flex-wrap gap-3">
        {products?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {products && products.length >= 9 && (
        <Pagination className="my-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="bg-white hover:bg-white hover:text-black" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="bg-white hover:bg-white hover:text-black">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="bg-white hover:bg-white hover:text-black" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="bg-white hover:bg-white hover:text-black">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="bg-white hover:bg-white hover:text-black" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}

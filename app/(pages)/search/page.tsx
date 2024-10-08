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
import { Wrapper } from '@/components/wrapper'
import { useEffect, useState } from 'react'
import { searchProductsAction } from '@/actions/search'
import { ProductType } from '@/lib/shopify/fetch/types'

export default function Search() {
  const params = useSearchParams()
  const queryParams = params.get('query')
  const [pending, setPending] = useState(true)
  const [products, setProducts] = useState<ProductType[] | undefined>(undefined)

  useEffect(() => {
    searchProductsAction(queryParams, 5).then((data) => {
      setPending(false)
      setProducts(data)
    })
  }, [queryParams])

  if (pending) return <span className="text-black">Carregando...</span>

  if (products && products?.length <= 0)
    return (
      <span className="text-black">
        Nenhum resultado para <strong>{queryParams}</strong>
      </span>
    )

  return (
    <Wrapper>
      <div className="w-full">
        <div className="items-between mt-10 flex w-full gap-6">
          {/* <div className="shrink-0">
        <Filter />
      </div> */}
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
        </div>
      </div>
    </Wrapper>
  )
}

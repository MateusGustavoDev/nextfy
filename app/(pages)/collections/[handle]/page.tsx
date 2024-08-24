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
import { getCollectionProducts } from '@/lib/shopify/fetch/products'
import { ProductCard } from '@/components/collections/product-card'
import { Filter } from '@/components/collections/filter'
const { SITE_NAME } = process.env

interface Props {
  params: { handle: string }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.handle} | ${SITE_NAME}`,
  }
}

export default async function Collection({ params }: Props) {
  const products = await getCollectionProducts({ collection: params.handle, first: 10 })

  return (
    <Wrapper>
      <div className="w-full">
        <div className="items-between mt-10 flex w-full gap-6">
          <div className="shrink-0">
            <Filter />
          </div>
          <div>
            <ul className="flex w-full flex-wrap gap-3">
              {products?.products.edges.map((product) => (
                <li key={product.node.id}>
                  <ProductCard product={product.node} />
                </li>
              ))}
            </ul>
            {products?.products.edges && products.products.edges.length >= 9 && (
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

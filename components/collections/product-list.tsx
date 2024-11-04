import { ProductType } from '@/lib/shopify/fetch/types'
import { ActionButton } from '../action-button'
import { ProductCard } from '../product/product-card'

interface ProductListProps {
  products: ProductType[]
  hasNextPage: boolean
  onLoadMore: () => void
}

export function ProductList({ products, onLoadMore, hasNextPage }: ProductListProps) {
  return (
    <div className="flex w-full max-w-[1138px] flex-col justify-center">
      <ul className="flex w-full flex-wrap gap-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <form action={onLoadMore} className="m-auto mt-10">
          <ActionButton>Carregar mais</ActionButton>
        </form>
      )}
    </div>
  )
}

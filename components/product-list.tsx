import { ProductType } from '@/lib/shopify/fetch/types'
import { ProductCard } from './product-card'
import { useFormStatus } from 'react-dom'
import { LoaderCircle } from 'lucide-react'

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
          <LoadMoreButton />
        </form>
      )}
    </div>
  )
}

function LoadMoreButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className="m-auto w-[150px] bg-black py-2 text-white">
      {pending ? <LoaderCircle className="m-auto animate-spin" /> : 'Carregar mais'}
    </button>
  )
}

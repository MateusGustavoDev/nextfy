import { ProductType } from '@/lib/shopify/fetch/types'
import { firstProductVariantUrl, formatPriceBrl, removeEdgesAndNodes } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: ProductType
}

export function ProductCard({ product }: ProductCardProps) {
  const productUrl = firstProductVariantUrl(removeEdgesAndNodes(product.variants), product.handle)

  return (
    <Link href={productUrl}>
      <div className="relative h-[370px] w-[370px] border border-black">
        <Image
          src={product.featuredImage?.url}
          alt={product.title}
          fill
          sizes="370px"
          style={{ objectFit: 'contain', padding: '16px' }}
        />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex w-full max-w-[370px] flex-col">
          <span className="text-lg">{product.title}</span>
        </div>
        <span>{formatPriceBrl(product.priceRange.minVariantPrice.amount)}</span>
      </div>
    </Link>
  )
}

import { ProductType } from '@/lib/shopify/fetch/types'
import { productFirstVariantUrl, formatPriceToBrl, removeEdgesAndNodes } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: ProductType
}

export function ProductCard({ product }: ProductCardProps) {
  const productUrl = productFirstVariantUrl(removeEdgesAndNodes(product.variants), product.handle)

  return (
    <Link href={productUrl}>
      <div className="relative aspect-[370/370] w-full max-w-[370px] border border-black tablet:max-w-full">
        <Image
          src={product.featuredImage?.url}
          alt={product.title}
          fill
          sizes="370px"
          style={{ objectFit: 'contain' }}
          className="p-6"
        />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex w-full max-w-[370px] flex-col">
          <span className="text-lg tablet:text-base">{product.title}</span>
        </div>
        <span className="tablet:text-sm">{formatPriceToBrl(product.priceRange.minVariantPrice.amount)}</span>
      </div>
    </Link>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
import { GetCollectionProductsQuery } from '@/lib/shopify/types/storefront.generated'
import { formatPriceBrl } from '@/utils/format-price'

interface CollectionProps {
  collection: GetCollectionProductsQuery
}

export function Carousel({ collection }: CollectionProps) {
  if (!collection.collection) return

  const products = collection.collection.products.edges

  return (
    <Wrapper>
      <div className="flex w-full flex-col gap-4">
        <span className="text-2xl">{collection.collection.title}</span>
        <div className="relative flex w-full gap-5 overflow-x-scroll">
          {products.map((product) => {
            const minPrice = product.node.priceRange.minVariantPrice
            const compareAtPrice = product.node.compareAtPriceRange.maxVariantPrice
            return (
              <Link key={product.node.id} href={`/product/${product.node.handle}`}>
                <div className="relative flex h-[270px] w-[270px] items-center justify-center border border-black bg-white">
                  <Image
                    src={product.node.featuredImage?.url}
                    alt={product.node.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[240px] w-auto"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="flex flex-col gap-2 py-2">
                  <span className="flex w-[270px] text-balance">{product.node.title}</span>
                  <div className="flex gap-2">
                    <span className="text-lg font-bold">{formatPriceBrl(minPrice.amount)}</span>
                    {compareAtPrice.amount > minPrice.amount && (
                      <span className="line-through">{formatPriceBrl(compareAtPrice.amount)}</span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export const products = [
  {
    title: 'Mackbook Air 13',
    price: 'R$ 12.599,00',
  },
  {
    title: 'Mackbook Pro 14',
    price: 'R$ 16.999,00',
  },
  {
    title: 'iPhone 13 Pro',
    price: 'R$ 9.499,00',
  },
  {
    title: 'iPad Pro 11',
    price: 'R$ 8.599,00',
  },
  {
    title: 'Apple Watch Series 7',
    price: 'R$ 3.999,00',
  },
  {
    title: 'AirPods Pro',
    price: 'R$ 2.299,00',
  },
  {
    title: 'Apple TV 4K',
    price: 'R$ 1.299,00',
  },
]

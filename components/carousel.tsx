import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
import { firstProductVariantUrl, formatPriceBrl, removeEdgesAndNodes } from '@/lib/utils'
import { getCollectionProducts } from '@/lib/shopify/fetch/products'

interface CollectionProps {
  category: string
}

export async function Carousel({ category }: CollectionProps) {
  const data = await getCollectionProducts({ collection: category, first: 10 })

  if (!data) return null

  return (
    <Wrapper>
      <div className="flex w-full flex-col gap-4">
        <span className="text-2xl">{data.title}</span>
        <ul className="relative flex w-full gap-5 overflow-x-scroll">
          {data.products.map((product) => {
            const minPrice = product.priceRange.minVariantPrice
            const compareAtPrice = product.compareAtPriceRange.maxVariantPrice
            const productUrl = firstProductVariantUrl(removeEdgesAndNodes(product.variants), product.handle)

            return (
              <li key={product.id}>
                <Link href={productUrl}>
                  <div className="relative flex h-[270px] w-[270px] items-center justify-center border border-black bg-white p-4">
                    <Image
                      src={product.featuredImage?.url}
                      alt={product.title}
                      fill
                      sizes="270px"
                      style={{ objectFit: 'contain', padding: '16px' }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <span className="flex w-[270px] text-balance">{product.title}</span>
                    <div className="flex gap-2">
                      <span className="text-lg font-bold">{formatPriceBrl(minPrice.amount)}</span>
                      {compareAtPrice.amount > minPrice.amount && (
                        <span className="line-through">{formatPriceBrl(compareAtPrice.amount)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

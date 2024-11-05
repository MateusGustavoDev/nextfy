import Image from 'next/image'
import Link from 'next/link'
import { productFirstVariantUrl, formatPriceToBrl, removeEdgesAndNodes } from '@/lib/utils'
import { getCollectionProducts } from '@/actions/products'

interface CollectionProps {
  collection: string
}

export async function Carousel({ collection }: CollectionProps) {
  const data = await getCollectionProducts({ collection: collection })

  if (!data) return null

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="item flex w-full items-center justify-between">
        <span className="w-max text-2xl mobile:text-base tablet:text-xl">{data.title}</span>
        <Link href={`/collections/${data.title.toLowerCase()}`} className="font-semibold tablet:text-sm">
          Ver todos
        </Link>
      </div>
      <ul className="relative flex w-full gap-5 overflow-x-scroll tablet:gap-3">
        {data.products.map((product) => {
          const minPrice = product.priceRange.minVariantPrice
          const compareAtPrice = product.compareAtPriceRange.maxVariantPrice
          const productUrl = productFirstVariantUrl(removeEdgesAndNodes(product.variants), product.handle)

          return (
            <li key={product.id}>
              <Link href={productUrl}>
                <div className="relative flex h-[270px] w-[270px] items-center justify-center border border-black bg-white p-4 tablet:h-[200px] tablet:w-[200px]">
                  <Image
                    src={product.featuredImage?.url}
                    alt={product.title}
                    fill
                    sizes="270px"
                    style={{ objectFit: 'contain' }}
                    className="p-4 tablet:p-6"
                  />
                </div>
                <div className="flex flex-col gap-2 py-2">
                  <span className="flex w-[270px] text-balance tablet:w-[200px] tablet:text-sm">{product.title}</span>
                  <div className="flex w-full gap-2">
                    <span className="text-lg font-bold tablet:text-base">{formatPriceToBrl(minPrice.amount)}</span>
                    {compareAtPrice.amount > minPrice.amount && (
                      <span className="line-through tablet:text-xs">{formatPriceToBrl(compareAtPrice.amount)}</span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

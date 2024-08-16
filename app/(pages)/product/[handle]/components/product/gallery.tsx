'use client'
import { ImagesType, ProductOptionsType } from '@/lib/shopify/fetch/types'
import { createUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface GalleryProps {
  images: ImagesType
  options: ProductOptionsType
  title: string | undefined
}

export function Gallery({ images, options, title }: GalleryProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const colorSearchParam = searchParams.get('cor')
  const imageSearchParam = searchParams.get('image')

  if (!images) return null

  const theColorOptionExists = options?.find((option) => option.name.toLocaleLowerCase() === 'cor')

  function getImagesBySelectedColor() {
    if (!theColorOptionExists) return images

    if (theColorOptionExists && !colorSearchParam && images) return [images[0]]

    const imagesByColor = images?.filter((image) => image.node.altText === colorSearchParam)

    if (imagesByColor?.length === 0 && images) return [images[0]]

    return imagesByColor
  }

  const productImages = getImagesBySelectedColor()

  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0

  return (
    <div className="relative flex h-max w-full max-w-[700px] flex-col items-center justify-center border border-black p-10">
      <div className="relative aspect-[700/600] w-full">
        {productImages && (
          <Image
            src={productImages[imageIndex >= productImages.length || imageIndex < 0 ? 0 : imageIndex].node.url}
            alt={title as string}
            fill
            sizes="600px"
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      {productImages && productImages.length > 1 && (
        <ul className="mt-6 flex gap-5">
          {productImages?.map((image, index) => {
            const isActive = index === imageIndex
            const imageSearchParams = new URLSearchParams(searchParams.toString())

            imageSearchParams.set('image', index.toString())

            return (
              <li key={image.node.url}>
                <Link
                  href={createUrl(pathname, imageSearchParams)}
                  scroll={false}
                  data-active={isActive}
                  className="relative flex h-[80px] w-[80px] items-center justify-center border border-black bg-white p-2 data-[active=true]:border-2"
                >
                  <Image
                    src={image.node.url}
                    alt={title as string}
                    fill
                    style={{ objectFit: 'contain', padding: '8px' }}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

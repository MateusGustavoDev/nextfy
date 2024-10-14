import { Wrapper } from '@/components/wrapper'
import { VariantSelector } from './variant-selector'
import { Description } from './description'
import { AddToCart } from '@/components/cart/add-to-cart'
import { Gallery } from './gallery'
import { removeEdgesAndNodes } from '@/lib/utils'
import { Price } from './price'
import { use } from 'react'
import { getProductByHandle } from '@/actions/products'
import { notFound } from 'next/navigation'

interface ProductItemProps {
  handle: string
}

export function Product({ handle }: ProductItemProps) {
  const product = use(getProductByHandle({ handle: handle }))

  if (!product) notFound()

  const price = product.priceRange.minVariantPrice.amount
  const variants = removeEdgesAndNodes(product.variants)
  const images = removeEdgesAndNodes(product.images)
  const options = product.options

  return (
    <Wrapper>
      <div className="relative flex h-max w-full gap-2">
        <Gallery images={images} options={options} title={product.title} />
        <div className="flex aspect-[700/600] w-full max-w-[600px] flex-col justify-between border border-black bg-white p-5">
          <div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl">{product.title}</span>
              <Price amount={price} variants={variants} options={options} />
            </div>
            <VariantSelector variants={variants} options={options} />
            <Description />
          </div>
          <AddToCart variants={variants} availableForSale={product.availableForSale} />
        </div>
      </div>
    </Wrapper>
  )
}

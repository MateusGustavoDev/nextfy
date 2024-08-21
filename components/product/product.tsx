import { Wrapper } from '@/components/wrapper'
import { VariantSelector } from './variant-selector'
import { Description } from './description'
import { AddToCart } from '@/components/cart/add-to-cart'
import { Gallery } from './gallery'
import { removeEdgesAndNodes } from '@/lib/utils'
import { Price } from './price'
import { ProductType } from '@/lib/shopify/fetch/types'

interface ProductItemProps {
  product: ProductType
}

export function Product({ product }: ProductItemProps) {
  const productPrice = product.priceRange.minVariantPrice.amount
  const productVariants = removeEdgesAndNodes(product.variants)
  const productImages = removeEdgesAndNodes(product.images)
  const productOptions = product.options

  return (
    <Wrapper>
      <div className="relative mt-10 flex h-max w-full gap-2">
        <Gallery images={productImages} options={productOptions} title={product.title} />
        <div className="flex aspect-[700/600] w-full max-w-[600px] flex-col justify-between border border-black bg-white p-5">
          <div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl">{product.title}</span>
              <Price amount={productPrice} variants={productVariants} options={productOptions} />
            </div>
            <VariantSelector variants={productVariants} options={productOptions} />
            <Description />
          </div>
          <AddToCart variants={productVariants} availableForSale={product.availableForSale} />
        </div>
      </div>
    </Wrapper>
  )
}

import { Wrapper } from '@/components/wrapper'
import { GetProductByHandleQuery } from '@/lib/shopify/types/storefront.generated'
import { VariantSelector } from './variant-selector'
import { Description } from './description'

import { AddToCart } from '@/components/cart/add-to-cart'
import { Gallery } from './gallery'
import { removeEdgesAndNodes } from '@/lib/utils'

interface ProductItemProps {
  product: GetProductByHandleQuery
}

export function ProductItem({ product }: ProductItemProps) {
  if (!product.product) return null

  const productVariants = removeEdgesAndNodes(product.product?.variants)
  const productOptions = product.product?.options

  return (
    <Wrapper>
      <div className="relative mt-10 flex h-max w-full gap-2">
        <Gallery images={product.product?.images.edges} options={productOptions} title={product.product?.title} />
        <div className="flex aspect-[700/600] w-full max-w-[600px] flex-col justify-between border border-black bg-white p-5">
          <div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl">{product.product?.title}</span>
              <span className="text-3xl font-bold">R$ 12.599,00</span>
            </div>
            <VariantSelector variants={productVariants} options={productOptions} />
            <Description />
          </div>
          <AddToCart variants={productVariants} availableForSale={product.product?.availableForSale} />
        </div>
      </div>
    </Wrapper>
  )
}

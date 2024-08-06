import { Wrapper } from '@/components/wrapper'
import { GetProductByHandleQuery } from '@/lib/shopify/types/storefront.generated'
import { VariantSelector } from './variant-selector'
import { Description } from './description'
import { Gallery } from './gallery'
import { AddToCart } from '@/components/cart/add-to-cart'

interface ProductItemProps {
  product: GetProductByHandleQuery
}

export function ProductItem({ product }: ProductItemProps) {
  const productVariants = product.product?.variants.edges
  const productOptions = product.product?.options

  return (
    <Wrapper>
      <div className="relative mt-10 flex h-max w-full gap-2">
        <Gallery />
        <div className="flex aspect-[700/600] w-full max-w-[600px] flex-col justify-between border border-black bg-white p-5">
          <div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold">{product.product?.title}</span>
              <span className="text-xl">R$ 12.599,00</span>
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

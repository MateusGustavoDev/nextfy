import { ProductItem } from '@/app/(pages)/product/components/product'

export default function Product() {
  return (
    <div className="w-full">
      <ProductItem />
      <div className="mt-10">{/* <Collection /> */}</div>
    </div>
  )
}

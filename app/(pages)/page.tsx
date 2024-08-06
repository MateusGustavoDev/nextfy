import { Carousel } from '@/components/carousel'
import { getCollectionProducts } from '@/lib/shopify/fetch/products'

export default async function Home() {
  const products = await getCollectionProducts({ collection: 'Smartphones' })

  return (
    <div className="mt-10">
      <div className="flex w-full flex-col gap-20">
        <div className="flex w-full flex-col gap-14">{products && <Carousel collection={products} />}</div>
      </div>
    </div>
  )
}

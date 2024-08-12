import { Carousel } from '@/components/carousel'
import { getCollectionProducts } from '@/lib/shopify/fetch/products'

export default async function Home() {
  const smartphones = await getCollectionProducts({ collection: 'Smartphones' })
  const watches = await getCollectionProducts({ collection: 'Watches' })

  return (
    <div className="mt-10">
      <div className="flex w-full flex-col gap-20">
        <div className="flex w-full flex-col gap-14">
          {smartphones && <Carousel collection={smartphones} />}
          {watches && <Carousel collection={watches} />}
        </div>
      </div>
    </div>
  )
}

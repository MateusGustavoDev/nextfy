import { Carousel } from '@/components/carousel'
import { getCollectionProducts } from '@/lib/shopify/fetch/products'

export default async function Home() {
  const { data, errorMessage } = await getCollectionProducts({ collection: 'Smartphones' })

  return (
    <div className="mt-10">
      <div className="flex w-full flex-col gap-20">
        <div className="flex w-full flex-col gap-14">{data && <Carousel collection={data} />}</div>
      </div>
    </div>
  )
}

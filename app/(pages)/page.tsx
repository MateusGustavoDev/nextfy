import { Carousel } from '@/components/carousel'
import { CarouselSkeleton } from '@/components/skeletons/carousel'
import { Metadata } from 'next'
import { Suspense } from 'react'
const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: SITE_NAME,
}

export default function Home() {
  return (
    <>
      <div className="mt-10">
        <div className="flex w-full flex-col gap-20">
          <div className="flex w-full flex-col gap-14">
            <Suspense fallback={<CarouselSkeleton />}>
              <Carousel collection="Smartphones" />
            </Suspense>
            <Suspense fallback={<CarouselSkeleton />}>
              <Carousel collection="Watches" />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

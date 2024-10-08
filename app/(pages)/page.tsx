import { Carousel } from '@/components/carousel'
import { LoaderCircle } from 'lucide-react'
import { Metadata } from 'next'
import { Suspense } from 'react'
const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: SITE_NAME,
}

export default function Home() {
  return (
    <div className="mt-10">
      <div className="flex w-full flex-col gap-20">
        <div className="flex w-full flex-col gap-14">
          <Suspense fallback={<Loading />}>
            <Carousel category="Smartphones" />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Carousel category="Watches" />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function Loading() {
  return (
    <div className="flex w-full justify-center py-10">
      <LoaderCircle className="h-10 w-10 animate-spin text-black" />
    </div>
  )
}

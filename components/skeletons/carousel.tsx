import { Skeleton } from '../ui/skeleton'

export function CarouselSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-7 w-[200px]" />
      <div className="relative flex w-full gap-5 overflow-hidden">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <CarouselItemSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

function CarouselItemSkeleton() {
  return (
    <div className="flex flex-col pb-14">
      <Skeleton className="h-[270px] w-[270px] shrink-0" />
      <div className="flex flex-col gap-2 py-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  )
}

import { Skeleton } from '../ui/skeleton'

export function ProductListSkeleton() {
  return (
    <div className="flex w-full max-w-[1138px] flex-col justify-center">
      <ul className="flex w-full flex-wrap gap-3">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <ProductListItemSkeleton key={index} />
        ))}
      </ul>
    </div>
  )
}

function ProductListItemSkeleton() {
  return (
    <div className="flex flex-col gap-2 pb-14">
      <Skeleton className="h-[368px] w-[368px]" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-[200px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  )
}

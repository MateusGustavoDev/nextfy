import { Skeleton } from '../ui/skeleton'

export function CustomerCardSkeleton() {
  return (
    <div className="flex h-[700px] w-full max-w-[360px] flex-col justify-between border bg-neutral-100 p-5">
      <div>
        <div className="mb-10 flex gap-3">
          <Skeleton className="h-14 w-14 rounded-full" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-[180px]" />
            <Skeleton className="h-4 w-[240px]" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-5 w-[60%]" />
          <Skeleton className="h-5 w-[60%]" />
        </div>
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

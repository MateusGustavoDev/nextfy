import { Skeleton } from '../ui/skeleton'

export function OrdersSkeleton() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
    </div>
  )
}

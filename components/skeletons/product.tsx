import { Skeleton } from '../ui/skeleton'
import { Wrapper } from '../wrapper'

export function ProductSkeleton() {
  return (
    <Wrapper>
      <div className="flex gap-2">
        <Skeleton className="h-[664px] w-[652px]" />
        <div className="flex h-[664px] w-[600px] flex-col justify-between bg-neutral-100 p-5">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-7 w-[400px]" />
            <Skeleton className="h-7 w-[200px]" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </Wrapper>
  )
}

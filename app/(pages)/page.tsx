import { Collection } from '@/components/collection'
import { Wrapper } from '@/components/wrapper'

export default function Home() {
  return (
    <div className="mt-10">
      <Wrapper>
        <div className="flex w-full flex-col gap-14 px-5">
          <Collection />
          <Collection />
        </div>
      </Wrapper>
    </div>
  )
}

import { Collection } from '@/components/collection'

export default function Home() {
  return (
    <div className="mt-10">
      <div className="m-auto flex max-w-screen-wrapper flex-col gap-14 px-5">
        <Collection />
        <Collection />
      </div>
    </div>
  )
}

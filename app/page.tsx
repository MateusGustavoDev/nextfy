import { Collection } from '@/components/collection/Collection'

export default function Home() {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-14">
        <Collection />
        <Collection />
      </div>
    </div>
  )
}

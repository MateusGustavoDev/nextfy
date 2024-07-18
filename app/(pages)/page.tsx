import { Collection } from '@/components/Collection/Collection'

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
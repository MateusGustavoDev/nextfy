import { Collection } from '@/components/collection'

export default function Home() {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-14">
        <Collection />
        <Collection />
      </div>
    </div>
  )
}

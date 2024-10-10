import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
import { CircleUserRound } from 'lucide-react'
import { SearchModal } from './search'
import { getCollections } from '@/lib/shopify/fetch/collections'
import { CartModal } from '@/components/cart/modal'
const { SITE_NAME } = process.env

export async function Header() {
  const data = await getCollections({ first: 10 })

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <Wrapper>
        <div className="flex h-[70px] w-full items-center justify-around">
          <Link href="/" className="text-2xl font-semibold">
            {SITE_NAME}
          </Link>
          <ul className="flex w-full justify-center gap-8">
            {data?.collections.map((collection) => (
              <li key={collection.id}>
                <Link href={`/categories/${collection.handle}`} className="hover:underline">
                  {collection.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-7">
            <SearchModal />
            <Link href="/orders" className="hover:underline">
              <CircleUserRound size={24} />
            </Link>
            <CartModal />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

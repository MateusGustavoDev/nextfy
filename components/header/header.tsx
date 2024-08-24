import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
import { CartModal } from '@/components/cart/modal'
import { CircleUserRound } from 'lucide-react'
import { Search } from './search'
import { getCollections } from '@/lib/shopify/fetch/collections'

export async function Header() {
  const collections = await getCollections({ first: 10 })

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <Wrapper>
        <div className="flex h-[70px] w-full items-center justify-around">
          <Link href="/" className="text-2xl font-semibold">
            Nextfy
          </Link>
          <ul className="flex w-full justify-center gap-8">
            {collections?.edges.map((collection) => (
              <li key={collection.node.id}>
                <Link href={`/collections/${collection.node.handle}`} className="hover:underline">
                  {collection.node.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-7">
            <Search />
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

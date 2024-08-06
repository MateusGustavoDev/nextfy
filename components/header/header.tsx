import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
import { CartModal } from '@/components/cart/modal'
import { CircleUserRound } from 'lucide-react'
import { Search } from './search'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <Wrapper>
        <div className="flex h-[70px] w-full items-center justify-around">
          <Link href="/" className="text-2xl font-semibold">
            Nextfy
          </Link>
          <div className="flex w-full justify-center gap-8">
            <Link href="/all-products" className="hover:underline">
              Todos os produtos
            </Link>
            <Link href="#" className="hover:underline">
              Mais vendidos
            </Link>
            <Link href="#" className="hover:underline">
              Coleções
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-7">
            <Search />
            <Link href="/profile" className="hover:underline">
              <CircleUserRound size={24} />
            </Link>
            <CartModal />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

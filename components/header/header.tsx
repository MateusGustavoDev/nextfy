import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
import { CircleUserRound } from 'lucide-react'
import { SearchModal } from '../search/search-bar'
import { CartModal } from '@/components/cart/modal'
import { MobileMenu } from './mobile-menu'

const { SITE_NAME } = process.env

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <Wrapper>
        <div className="flex h-[70px] w-full items-center justify-between">
          <div className="hidden items-center gap-3 tablet:flex">
            <MobileMenu />
            <SearchModal />
          </div>
          <Link href="/" className="text-2xl font-semibold">
            {SITE_NAME}
          </Link>
          <ul className="flex w-full justify-center gap-8 tablet:hidden">
            <li>
              <Link href="/collections/smartphones" className="hover:underline">
                Smartphones
              </Link>
            </li>
            <li>
              <Link href="/collections/watches" className="hover:underline">
                Watches
              </Link>
            </li>
            <li>
              <Link href="/collections/novidades" className="hover:underline">
                Novidades
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:underline">
                Todos
              </Link>
            </li>
          </ul>
          <div className="flex shrink-0 items-center gap-7">
            <div className="tablet:hidden">
              <SearchModal />
            </div>
            <Link href="/account/orders" className="hover:underline">
              <CircleUserRound size={24} />
            </Link>
            <CartModal />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

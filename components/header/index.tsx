import Link from 'next/link'
import { Search } from './search'
import { Cart } from '../cart'
import { CircleUserRound } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-700 bg-black">
      <div className="m-auto flex h-[70px] w-full max-w-screen-wrapper items-center justify-around px-6">
        <Link href="/" className="text-2xl font-semibold">
          Nextfy
        </Link>
        <div className="flex w-full justify-center gap-8">
          <Link href="#" className="hover:underline">
            Inicio
          </Link>
          <Link href="#" className="hover:underline">
            Todos os produtos
          </Link>
          <Link href="#" className="hover:underline">
            Mais vendidos
          </Link>
          <Link href="#" className="hover:underline">
            Contato
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-7">
          <Search />
          <Link href="/account/profile" className="hover:underline">
            <CircleUserRound size={24} />
          </Link>
          <Cart />
        </div>
      </div>
    </header>
  )
}

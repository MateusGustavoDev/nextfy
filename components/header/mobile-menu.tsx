import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Menu">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[400px] border-black bg-white py-4">
        <SheetHeader>
          <SheetTitle className="text-black">Categorias</SheetTitle>
        </SheetHeader>
        <ul className="mt-5 flex flex-col gap-4">
          <li>
            <Link href="/collections/smartphones">Smartphones</Link>
          </li>
          <li>
            <Link href="/collections/smartphones">Watches</Link>
          </li>
          <li>
            <Link href="/collections/smartphones">Watches</Link>
          </li>
          <li>
            <Link href="/collections/smartphones">Watches</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}

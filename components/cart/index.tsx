import { ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { CartItem } from './cart-item'
import { CartResume } from './cart-resume'

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="max-w-[440px] border-zinc-700 bg-black py-4">
        <SheetHeader>
          <SheetTitle className="text-white">Carrinho de compras</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-10 flex flex-col gap-4 overflow-auto">
            <CartItem />
            <CartItem />
          </div>
          <CartResume />
        </div>
      </SheetContent>
    </Sheet>
  )
}

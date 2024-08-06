import { ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CartResume } from './resume'
import { CartItem } from './item'

export function CartModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[400px] border-black bg-white py-4">
        <SheetHeader>
          <SheetTitle className="text-black">Carrinho de compras</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-6 flex flex-col gap-4 overflow-auto py-2">
            <CartItem />
            <CartItem />
          </div>
          <CartResume />
        </div>
      </SheetContent>
    </Sheet>
  )
}

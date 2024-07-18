import { ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="border-zinc-700 bg-zinc-900">
        <SheetHeader>
          <SheetTitle className="text-white">Carrinho de compras</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

import { ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="max-w-[440px] border-black bg-white py-4">
        <SheetHeader>
          <SheetTitle className="text-black">Carrinho de compras</SheetTitle>
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

export function CartItem() {
  return (
    <div className="flex w-full gap-4">
      <div className="relative h-28 w-28 shrink-0 border border-black bg-white">
        <Image
          src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
          fill
          alt=""
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <span>Macbook Air</span>
          <span className="text-sm">Stelar / 512 GB</span>
          <span>R$ 12.599,00</span>
          <div className="mt-2 flex h-max items-center gap-4 border border-black px-2 py-1">
            <button className="h-max">
              <Minus size={18} />
            </button>
            <span>1</span>
            <button className="h-max">
              <Plus size={18} />
            </button>
          </div>
        </div>
        <div>
          <button className="h-max bg-white">
            <Trash size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}

function CartResume() {
  return (
    <div className="mb-8">
      <div className="flex w-full items-center justify-between">
        <span>Subtotal</span>
        <span>R$ 12.599,00</span>
      </div>
      <div className="my-3 h-[1px] w-full bg-black" />
      <div className="flex w-full items-center justify-between">
        <span>Entrega</span>
        <span className="uppercase">Gratis</span>
      </div>
      <div className="my-3 h-[1px] w-full bg-black" />
      <div className="flex w-full items-center justify-between">
        <span>Total</span>
        <span>R$ 12.599,00</span>
      </div>
      <button className="mt-6 w-full bg-black py-2 text-white">Finalizar compra</button>
    </div>
  )
}

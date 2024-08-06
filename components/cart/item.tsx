import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'

export function CartItem() {
  return (
    <div className="flex w-full gap-3">
      <div className="relative h-24 w-24 shrink-0 border border-black bg-white">
        <Image
          src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
          fill
          alt=""
          style={{ objectFit: 'contain' }}
        />
        <button className="absolute -right-2 -top-2 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-xs text-white">
          X
        </button>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex w-full justify-between">
          <div className="flex w-full max-w-[130px] flex-col">
            <span>Macbook Air 13</span>
            <span className="text-sm">Stelar / 512 GB</span>
          </div>
          <div className="flex flex-col">
            <span>R$ 12.599,00</span>
            <div className="mt-2 flex h-max items-center justify-center gap-4 border border-black py-1">
              <button className="h-max">
                <Minus size={18} />
              </button>
              <span>1</span>
              <button className="h-max">
                <Plus size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

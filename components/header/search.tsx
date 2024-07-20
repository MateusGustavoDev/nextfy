import { SearchIcon } from 'lucide-react'
import { Dialog } from '../ui/dialog'
import { DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import Image from 'next/image'

export function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="outline-none">
          <SearchIcon size={24} />
        </button>
      </DialogTrigger>
      <DialogContent className="absolute left-1/2 top-20 z-50 w-full max-w-[700px] -translate-x-1/2 border border-zinc-700 bg-black p-6">
        <input placeholder="Pesquisar produto" className="w-full border border-zinc-600 bg-black px-4 py-2" />
        <div className="mt-6 flex max-h-[400px] flex-col gap-2 overflow-auto">
          <div className="flex gap-4">
            <div className="relative h-20 w-20 bg-zinc-900">
              <Image
                src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
                fill
                alt=""
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-col">
              <span>Macbook Air</span>
              <span>R$ 12.599,00</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative h-20 w-20 bg-zinc-900">
              <Image
                src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
                fill
                alt=""
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-col">
              <span>Macbook Air</span>
              <span>R$ 12.599,00</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

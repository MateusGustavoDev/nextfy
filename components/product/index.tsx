import { Description } from './description'
import { Gallery } from './gallery'

export function Product() {
  return (
    <div className="relative m-auto mt-10 flex h-max w-full max-w-screen-wrapper bg-black p-5">
      <Gallery />
      <div className="flex aspect-[700/600] w-full max-w-[600px] flex-col justify-between p-1 px-4">
        <div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl">Macbook Air</span>
            <span className="text-xl">R$ 12.599,00</span>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span>Cor</span>
              <div className="flex gap-4">
                <button className="w-max border border-zinc-700 px-3 py-1">Preto</button>
                <button className="w-max border border-zinc-700 px-3 py-1">Azul</button>
                <button className="w-max border border-zinc-700 px-3 py-1">Prateado</button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span>Armazenamento</span>
              <div className="flex gap-4">
                <button className="w-max border border-zinc-700 px-3 py-1">256 GB</button>
                <button className="w-max border border-zinc-700 px-3 py-1">512 GB</button>
                <button className="w-max border border-zinc-700 px-3 py-1">1 TB</button>
              </div>
            </div>
          </div>
          <Description />
        </div>
        <button className="bg-white py-2 text-black">Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

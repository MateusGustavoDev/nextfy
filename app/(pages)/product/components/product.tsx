import { ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Wrapper } from '@/components/wrapper'
import Image from 'next/image'

export function ProductItem() {
  return (
    <Wrapper>
      <div className="relative mt-10 flex h-max w-full gap-2">
        <Gallery />
        <div className="flex aspect-[700/600] w-full max-w-[600px] flex-col justify-between border border-black bg-white p-5">
          <div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl">Macbook Air</span>
              <span className="text-xl">R$ 12.599,00</span>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span>Cor</span>
                <div className="flex gap-4">
                  <button className="w-max border border-black px-3 py-1">Preto</button>
                  <button className="w-max border border-black px-3 py-1">Azul</button>
                  <button className="w-max border border-black px-3 py-1">Prateado</button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>Armazenamento</span>
                <div className="flex gap-4">
                  <button className="w-max border border-black px-3 py-1">256 GB</button>
                  <button className="w-max border border-black px-3 py-1">512 GB</button>
                  <button className="w-max border border-black px-3 py-1">1 TB</button>
                </div>
              </div>
            </div>
            <Description />
          </div>
          <button className="bg-black py-2 text-white">Adicionar ao carrinho</button>
        </div>
      </div>
    </Wrapper>
  )
}

export function Gallery() {
  return (
    <div className="relative flex aspect-[700/600] h-max w-full max-w-[700px] items-center justify-center border border-black bg-white">
      <Image
        src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
        width={0}
        height={0}
        sizes="100vw"
        className="h-690 w-auto"
        alt=""
      />
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-5">
        <button className="border border-black bg-white p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
          />
        </button>
        <button className="border border-black bg-white p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
          />
        </button>
        <button className="border border-black bg-white p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

export function Description() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="mt-5 flex w-full max-w-[200px] items-center justify-between uppercase">
          Descrição
          <ChevronRight size={22} />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[700px] border-black bg-white p-20">
        <SheetHeader className="text-xl uppercase">Descrição</SheetHeader>
        <div className="mt-10">
          <p>
            <strong>Chip M3 da Apple</strong>
            <br></br>
            <br></br>
            Chip M3 da Apple Um chip ultrarrápido e potente para ajudar a realizar tarefas diárias e enfrentar fluxos de
            trabalho ainda mais intensos. Rode vários apps e edite milhares de fotos ou vídeos 4K. Até 13x mais rápido
            que o melhor MacBook Air com processador Intel nota de rodapé ⁴. Compatível com até dois monitores externos
            (com o notebook fechado).
            <br></br>
            <br></br>
            <strong>Memória unificada</strong>
            <br></br>
            <br></br>
            Mais veloz e eficiente do que a RAM tradicional, a memória unificada é integrada ao chip da Apple para que
            os apps compartilhem dados com rapidez entre CPU, GPU e Neural Engine. Roda múltiplos apps ao mesmo tempo
            sem perder velocidade nem capacidade de resposta. Aumente a memória para rodar mais apps ao mesmo tempo com
            mais velocidade e fluidez. O MacBook Air pode ser configurado com até 24 GB de memória.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

import { ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'

export function Description() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="mt-5 flex w-full max-w-[200px] items-center justify-between uppercase">
          Descrição
          <ChevronRight size={22} />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[700px] border-zinc-700 bg-zinc-900 p-20">
        <SheetHeader className="text-xl uppercase">Descrição</SheetHeader>
        <div className="mt-10">
          <p>
            Chip M3 da Apple Um chip ultrarrápido e potente para ajudar a realizar tarefas diárias e enfrentar fluxos de
            trabalho ainda mais intensos. Rode vários apps e edite milhares de fotos ou vídeos 4K. Até 13x mais rápido
            que o melhor MacBook Air com processador Intel nota de rodapé ⁴. Compatível com até dois monitores externos
            (com o notebook fechado). Memória unificada Mais veloz e eficiente do que a RAM tradicional, a memória
            unificada é integrada ao chip da Apple para que os apps compartilhem dados com rapidez entre CPU, GPU e
            Neural Engine. Roda múltiplos apps ao mesmo tempo sem perder velocidade nem capacidade de resposta. Aumente
            a memória para rodar mais apps ao mesmo tempo com mais velocidade e fluidez. O MacBook Air pode ser
            configurado com até 24 GB de memória.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

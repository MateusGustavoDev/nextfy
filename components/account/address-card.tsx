import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTrigger } from '@radix-ui/react-dialog'

export function AddressCard() {
  return (
    <div className="flex justify-between border border-black p-4">
      <div className="flex flex-col">
        <span>Mateus Gustavo</span>
        <span>Rua tal numero, 20</span>
        <span>Cidade tal, 12121</span>
        <span>Brasil</span>
      </div>
      <div className="flex flex-col gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <button>Editar</button>
          </DialogTrigger>
          <DialogOverlay />

          <DialogContent className="absolute left-1/2 top-1/2 z-50 flex w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col gap-3 border border-black bg-white p-5">
            <span>Editar Endereço</span>
            <div className="flex w-full flex-col gap-3">
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Nome" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Sobrenome" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Endereço 1" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Endereço 2" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Cidade" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Pais" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Estado" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="CEP" />
              <input className="w-full border border-black bg-white px-4 py-2" placeholder="Numero de telefone" />
            </div>
            <label className="flex h-max items-center gap-3">
              <input type="checkbox" className="h-5 w-5" />
              Endereço padrão
            </label>
            <div className="mt-4 flex w-full gap-5">
              <button>Salvar</button>
              <DialogClose asChild>
                <button>Cancelar</button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
        <button>Deletar</button>
      </div>
    </div>
  )
}

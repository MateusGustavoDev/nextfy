import { SearchIcon } from 'lucide-react'
import { Dialog } from '../ui/dialog'
import { DialogContent, DialogTrigger } from '@radix-ui/react-dialog'

export function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="outline-none">
          <SearchIcon size={24} />
        </button>
      </DialogTrigger>
      <DialogContent className="absolute left-1/2 top-24 w-full max-w-[600px] -translate-x-1/2 bg-zinc-900 p-5">
        <input placeholder="Pesquisar produto" className="w-full border border-zinc-700 bg-zinc-900 px-5 py-2" />
      </DialogContent>
    </Dialog>
  )
}

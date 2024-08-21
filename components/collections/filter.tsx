import Link from 'next/link'

export function Filter() {
  return (
    <div>
      <span className="font-bold">Filtrar por</span>
      <div className="mt-2 flex flex-col gap-2">
        <Link href="#" className="text-sm">
          Novidades
        </Link>
        <Link href="#" className="text-sm">
          Maior preço
        </Link>
        <Link href="#" className="text-sm">
          Menor preço
        </Link>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
      <h1 className="text-3xl">400 | Página não encontrada</h1>
      <Link href="/" className="mt-5 text-red-600 underline">
        Voltar para o inicio
      </Link>
    </div>
  )
}

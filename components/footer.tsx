import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-20 bg-zinc-900">
      <div className="m-auto flex h-16 w-full max-w-screen-wrapper items-center justify-between">
        <span className="text-sm text-neutral-300">© 2024 | Nextfy | Todos os direitos reservados.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:underline">
            Política de privacidade
          </Link>
          <Link href="/terms" className="hover:underline">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  )
}

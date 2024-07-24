import Link from 'next/link'
const { SITE_NAME } = process.env

export function Footer() {
  return (
    <footer className="mt-20 bg-black">
      <div className="m-auto flex h-16 w-full max-w-screen-wrapper items-center justify-between">
        <span className="text-sm text-neutral-300">© 2024 | {SITE_NAME} | Todos os direitos reservados.</span>
        <div className="flex gap-6">
          <Link href="/legal/privacy-policy" className="hover:underline">
            Política de privacidade
          </Link>
          <Link href="/legal/terms" className="hover:underline">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  )
}

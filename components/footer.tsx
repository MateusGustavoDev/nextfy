import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
const { SITE_NAME } = process.env

export function Footer() {
  return (
    <footer className="mt-32 border-t border-black">
      <Wrapper>
        <div className="flex h-16 w-full items-center justify-between">
          <span className="text-sm">© 2024 | {SITE_NAME} | Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <Link href="/legal/privacy-policy" className="hover:underline">
              Política de privacidade
            </Link>
            <Link href="/legal/terms" className="hover:underline">
              Termos de Uso
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

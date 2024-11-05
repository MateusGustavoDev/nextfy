import Link from 'next/link'
import { Wrapper } from '@/components/wrapper'
const { SITE_NAME } = process.env

export function Footer() {
  return (
    <footer className="mt-32 border-t border-black">
      <Wrapper>
        <div className="flex w-full items-center justify-between py-4 tablet:flex-col-reverse tablet:gap-4">
          <span className="text-sm tablet:w-full">© 2024 | {SITE_NAME} | Todos os direitos reservados.</span>
          <div className="flex gap-6 tablet:w-full tablet:flex-col tablet:gap-2 tablet:text-sm">
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

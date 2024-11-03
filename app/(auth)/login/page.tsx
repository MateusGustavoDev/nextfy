import Link from 'next/link'
import { Metadata } from 'next'
import { LoginForm } from '@/components/auth-form/login'
const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: `Login | ${SITE_NAME}`,
  description: 'Generated by create next app',
}

export default async function LoginPage() {
  return (
    <div>
      <Link href="/" className="m-auto my-5 flex w-max text-lg font-semibold">
        Nextfy
      </Link>
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col gap-2">
        <h1 className="mb-4 text-center text-2xl font-semibold">Fazer login</h1>
        <LoginForm />
        <Link href="/signup" className="text-sm underline">
          Criar conta
        </Link>
      </div>
    </div>
  )
}

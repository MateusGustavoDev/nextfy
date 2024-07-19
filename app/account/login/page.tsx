import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <Link href="/" className="m-auto my-5 flex w-max text-lg font-semibold">
        Nextfy
      </Link>
      <div className="absolute left-1/2 top-20 mt-10 w-full max-w-[500px] -translate-x-1/2 border border-zinc-700 bg-zinc-900 p-5">
        <form className="flex flex-col gap-4">
          <input placeholder="Email" className="w-full border border-zinc-700 bg-zinc-900 px-4 py-2" />
          <input placeholder="Senha" className="w-full border border-zinc-700 bg-zinc-900 px-4 py-2" />
          <Link href="#" className="text-sm underline">
            Esqueci minha senha
          </Link>
          <button className="bg-white py-2 text-black">Entrar</button>
          <Link href="/account/create-account" className="text-sm underline">
            Criar conta
          </Link>
        </form>
      </div>
    </div>
  )
}

import { deleteSession } from '@/actions/auth/session'
import Link from 'next/link'

interface ProfileCardProps {
  firstName: string
  lastName: string
  email: string
}

export function ProfileCard({ firstName, lastName, email }: ProfileCardProps) {
  return (
    <div className="flex w-full max-w-[260px] flex-col justify-between border border-black bg-white px-5 py-10">
      <div>
        <div className="mb-10 flex flex-col gap-2">
          <div className="flex flex-col">
            <span>{`${firstName} ${lastName}`}</span>
            <span>{email}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <Link href="/orders" className="hover:underline">
              Pedidos
            </Link>
            <Link href="/address" className="hover:underline">
              Endereços
            </Link>
          </div>
        </div>
      </div>
      <div>
        <form action={deleteSession}>
          <button type="submit" className="w-max">
            Sair da conta
          </button>
        </form>
      </div>
    </div>
  )
}

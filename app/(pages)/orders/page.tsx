import Link from 'next/link'
import { Metadata } from 'next'
const { SITE_NAME } = process.env
import { Wrapper } from '@/components/wrapper'
import { ProfileCard } from '@/components/profile/profile-card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { verifySession } from '@/actions/auth/session'

export const metadata: Metadata = {
  title: `Pedidos | ${SITE_NAME}`,
}

export default async function Orders() {
  return (
    <Wrapper>
      <div className="mt-10 flex w-full gap-4">
        <ProfileCard />
        <div className="h-[600px] w-full border border-black p-5">
          <span className="text-xl uppercase">Seus pedidos</span>
          <div className="flex h-full flex-col justify-between">
            <div className="mt-10 flex flex-col gap-4 overflow-auto">
              <div className="flex border border-zinc-700 p-2 px-4">
                <table className="w-full">
                  <tr className="text-left">
                    <th>Numero</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Preço</th>
                  </tr>
                  <tr className="text-left">
                    <td>#0001</td>
                    <td>19/07/2024</td>
                    <td>Pago</td>
                    <td>R$ 12.599,00</td>
                  </tr>
                </table>
                <Link href="#" className="shrink-0 hover:underline">
                  Mais detalhes
                </Link>
              </div>
              <div className="flex border border-zinc-700 p-2 px-4">
                <table className="w-full">
                  <tr className="text-left">
                    <th>Numero</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Preço</th>
                  </tr>
                  <tr className="text-left">
                    <td>#0001</td>
                    <td>19/07/2024</td>
                    <td>Pago</td>
                    <td>R$ 12.599,00</td>
                  </tr>
                </table>
                <Link href="#" className="shrink-0 hover:underline">
                  Mais detalhes
                </Link>
              </div>
              <div className="flex border border-zinc-700 p-2 px-4">
                <table className="w-full">
                  <tr className="text-left">
                    <th>Numero</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Preço</th>
                  </tr>
                  <tr className="text-left">
                    <td>#0001</td>
                    <td>19/07/2024</td>
                    <td>Pago</td>
                    <td>R$ 12.599,00</td>
                  </tr>
                </table>
                <Link href="#" className="shrink-0 hover:underline">
                  Mais detalhes
                </Link>
              </div>
            </div>
            <Pagination className="mb-5 justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="bg-white hover:bg-white hover:text-black" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="bg-white hover:bg-white hover:text-black">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="bg-white hover:bg-white hover:text-black" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="bg-white hover:bg-white hover:text-black">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="bg-white hover:bg-white hover:text-black" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

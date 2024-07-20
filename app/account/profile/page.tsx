import Link from 'next/link'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ProfileCard } from '@/components/profile-card'

export default function ProfilePage() {
  return (
    <div className="m-auto mt-10 flex w-full max-w-screen-wrapper gap-4 px-6">
      <ProfileCard />
      <div className="h-[600px] w-full bg-black p-5">
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
              <Link href="#" className="shrink-0 underline">
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
              <Link href="#" className="shrink-0 underline">
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
              <Link href="#" className="shrink-0 underline">
                Mais detalhes
              </Link>
            </div>
          </div>
          <Pagination className="mb-5 justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

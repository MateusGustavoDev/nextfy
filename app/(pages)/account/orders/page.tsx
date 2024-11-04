import { Metadata } from 'next'
import { CustomerOrders } from '@/components/account/orders'
import { Wrapper } from '@/components/wrapper'
import { CustomerCard } from '@/components/account/customer-card'
import { OrdersSkeleton } from '@/components/skeletons/orders'
import { Suspense } from 'react'
import { CustomerCardSkeleton } from '@/components/skeletons/customer-card'
const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: `Pedidos | ${SITE_NAME}`,
}

type SearchParams = Promise<{ page: number | undefined }>

export default async function OrdersPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const page = searchParams.page

  return (
    <Wrapper className="mt-10 flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Meus pedidos</h1>
      <div className="flex gap-4">
        <Suspense fallback={<CustomerCardSkeleton />}>
          <CustomerCard />
        </Suspense>
        <Suspense fallback={<OrdersSkeleton />}>
          <CustomerOrders page={page} />
        </Suspense>
      </div>
    </Wrapper>
  )
}

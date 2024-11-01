import { Metadata } from 'next'
import { CustomerOrders } from '@/components/account/orders'
import { Wrapper } from '@/components/wrapper'
import { ProfileCard } from '@/components/account/profile-card'
const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: `Pedidos | ${SITE_NAME}`,
}

export default async function OrdersPage() {
  return (
    <Wrapper className="mt-10 flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Meus pedidos</h1>
      <div className="flex gap-4">
        <ProfileCard email="mateusgustavodev@gmail.com" firstName="Mateus" lastName="Gustavo" />
        <div className="relative flex w-full flex-col gap-4 overflow-y-auto">
          <CustomerOrders />
        </div>
      </div>
    </Wrapper>
  )
}

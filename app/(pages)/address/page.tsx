import { AddressCard } from '@/components/profile/address-card'
import { ProfileCard } from '@/components/profile/profile-card'
import { Wrapper } from '@/components/wrapper'
import { Metadata } from 'next'
const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: `Endereços | ${SITE_NAME} `,
}

export default function Address() {
  return (
    <Wrapper>
      <div className="mt-10 flex w-full gap-4">
        <ProfileCard />
        <div className="relative h-[600px] w-full border border-black p-5">
          <span className="text-xl uppercase">Seus Endereços</span>
          <div className="mt-10 flex flex-col gap-2">
            <button className="w-max">Novo Endereços</button>
            <div className="flex flex-col gap-4">
              <AddressCard />
              <AddressCard />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

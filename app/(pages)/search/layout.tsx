import { Wrapper } from '@/components/wrapper'
import ChildrenWrapper from './children-wrapper'

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChildrenWrapper>
      <Wrapper>
        <div className="w-full">
          <div className="items-between mt-10 flex w-full gap-6">{children}</div>
        </div>
      </Wrapper>
    </ChildrenWrapper>
  )
}

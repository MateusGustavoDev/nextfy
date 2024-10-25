import ChildrenWrapper from './children-wrapper'

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <ChildrenWrapper>{children}</ChildrenWrapper>
}

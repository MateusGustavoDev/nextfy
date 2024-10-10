'use client'
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogHeader } from '../ui/dialog'
import { LoaderCircle, SearchIcon } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { ProductType } from '@/lib/shopify/fetch/types'
import { firstProductVariantUrl, removeEdgesAndNodes } from '@/lib/utils'
import { searchProductsAction } from '@/actions/search'
import { useRouter } from 'next/navigation'

export function SearchModal() {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState<ProductType[] | null>(null)
  const [recentSearches, setRecentSearches] = useState<string[] | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [pending, setPending] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setRecentSearches(JSON.parse(localStorage.getItem('recentSearches') || '[]'))
  }, [])

  useEffect(() => {
    if (inputValue === '') setSearchResults(null)

    async function handleSearchProducts(query: string) {
      setSearchResults(null)
      setPending(true)
      const products = await searchProductsAction(query, 5)
      setPending(false)
      setSearchResults(products ? products : null)
    }

    const timeoutId = setTimeout(() => {
      handleSearchProducts(inputValue)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [inputValue])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsOpen(false)
    setInputValue('')

    let recentSearches: string[] = JSON.parse(localStorage.getItem('recentSearches') || '[]')

    if (!recentSearches.includes(inputValue)) {
      recentSearches.push(inputValue)
    }

    if (recentSearches.length > 5) {
      recentSearches.shift()
    }

    localStorage.setItem('recentSearches', JSON.stringify(recentSearches))

    setRecentSearches(recentSearches.reverse())

    router.push(`/search?query=${inputValue}`)
  }

  function handleClearRecentSearches() {
    localStorage.setItem('recentSearches', JSON.stringify([]))
    setRecentSearches([])
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        <button className="outline-none">
          <SearchIcon size={24} />
        </button>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 z-50 bg-black/80" />
      <DialogContent className="absolute left-1/2 top-20 z-50 w-full max-w-[700px] -translate-x-1/2 translate-y-0 flex-col bg-white p-6">
        <DialogHeader className="mb-4">
          <DialogTitle>Pesquisar produtos</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome do produto"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full border border-zinc-600 bg-white px-4 py-2"
          />
        </form>
        <ul className="my-6 flex flex-col gap-2">
          {pending && <LoaderCircle className="animate-spin" />}
          {searchResults && searchResults.length <= 0 && <span>Nenhum resultado encontrado</span>}
          {searchResults?.map((product) => {
            const productUrl = firstProductVariantUrl(removeEdgesAndNodes(product.variants), product.handle)

            return (
              <li key={product.id}>
                <DialogClose asChild>
                  <Link href={productUrl} className="hover:underline">
                    {product.title}
                  </Link>
                </DialogClose>
              </li>
            )
          })}
        </ul>
        {searchResults && searchResults.length >= 5 && (
          <div className="flex w-full justify-end">
            <DialogClose asChild>
              <Link href={`/search?query=${inputValue}`} className="hover:underline">
                Ver todos: <strong>{inputValue}</strong>
              </Link>
            </DialogClose>
          </div>
        )}
        {recentSearches && recentSearches.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="flex w-full max-w-[300px] items-center gap-4">
              <span className="text-sm">Pesquisas recentes</span>
              <button onClick={handleClearRecentSearches} className="border border-black px-2 text-xs">
                Limpar
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {recentSearches.map((item, index) => (
                <li key={index}>
                  <DialogClose asChild>
                    <Link href={`/search?query=${item}`} className="flex items-center gap-2 text-sm">
                      <SearchIcon size={14} />
                      {item}
                    </Link>
                  </DialogClose>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

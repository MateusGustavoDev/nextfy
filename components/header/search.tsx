'use client'
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogHeader } from '../ui/dialog'
import { SearchIcon } from 'lucide-react'
import { searchProducts } from '@/lib/shopify/fetch/products'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SearchResultType } from '@/lib/shopify/fetch/types'
import { firstProductVariantUrl, removeEdgesAndNodes } from '@/lib/utils'

export function Search() {
  const [inputValue, setInputValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')
  const [searchResult, setSearchResult] = useState<SearchResultType | undefined>(undefined)

  async function handleSearchProducts(query: string) {
    const products = await searchProducts(query, 5)
    setSearchResult(products)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [inputValue])

  useEffect(() => {
    if (debouncedValue !== '') {
      handleSearchProducts(debouncedValue)
    }
  }, [debouncedValue])

  return (
    <Dialog>
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
        <form>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nome do produto"
            className="w-full border border-zinc-600 bg-white px-4 py-2"
          />
        </form>
        <ul className="mb-6 mt-6 flex max-h-[400px] flex-col gap-2 overflow-auto">
          {searchResult &&
            searchResult.map((product) => {
              const productUrl = firstProductVariantUrl(removeEdgesAndNodes(product.node.variants), product.node.handle)

              return (
                <li key={product.node.id} className="flex gap-4">
                  <DialogClose asChild>
                    <Link href={productUrl} className="hover:underline">
                      {product.node.title}
                    </Link>
                  </DialogClose>
                </li>
              )
            })}
        </ul>
        {searchResult && (
          <DialogClose asChild>
            <Link href="#" className="text-sm hover:underline">
              Todos resultados para: <strong>{debouncedValue}</strong>
            </Link>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  )
}

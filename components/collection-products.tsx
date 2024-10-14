'use client'
import { ProductList } from '@/components/product-list'
import { getCollectionProducts } from '@/actions/products'
import { CollectionProductType, ProductType } from '@/lib/shopify/fetch/types'
import { useState } from 'react'

interface CollectionProductsProps {
  collection: CollectionProductType
  numProducts: number
}

export function CollectionProducts({ collection, numProducts }: CollectionProductsProps) {
  const [products, setProducts] = useState<ProductType[]>(collection.products)
  const [endCursor, setEndCursor] = useState(collection.pageInfo.endCursor)
  const [hasNextPage, setHasNextPage] = useState(collection.pageInfo.hasNextPage)

  async function handleOnLoadMore() {
    const data = await getCollectionProducts({
      collection: collection.title,
      numProducts: numProducts,
      cursor: endCursor ? endCursor : '',
    })
    if (data?.products) {
      setProducts([...products, ...data.products])
      setEndCursor(data.pageInfo.endCursor)
      setHasNextPage(data.pageInfo.hasNextPage)
    }
  }

  return <ProductList products={products} onLoadMore={handleOnLoadMore} hasNextPage={hasNextPage} />
}

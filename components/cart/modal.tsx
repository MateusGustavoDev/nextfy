import { ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CartResume } from './resume'
import { CartItem } from './item'
import { cookies } from 'next/headers'
import { getCart } from '@/lib/shopify/fetch/cart'
import { CartType } from '@/lib/shopify/fetch/types'

export async function CartModal() {
  const cartId = cookies().get('cartId')?.value
  let cart: CartType

  if (cartId) {
    cart = await getCart(cartId)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          {cart && cart.totalQuantity > 0 && (
            <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-sm text-white">
              {cart.totalQuantity}
            </div>
          )}
          <ShoppingBag size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[400px] border-black bg-white py-4">
        <SheetHeader>
          <SheetTitle className="text-black">Carrinho de compras</SheetTitle>
        </SheetHeader>
        {cart && cart.lines.edges.length > 0 ? (
          <div className="flex h-full flex-col justify-between">
            <ul className="mt-6 flex flex-col gap-4 overflow-auto py-2">
              {cart.lines.edges.map((item) => {
                const selectedVariant = item.node.merchandise.product.variants.edges.find(
                  (variant) => variant.node.id === item.node.merchandise.id,
                )
                return (
                  <li key={item.node.id}>
                    <CartItem
                      id={item.node.id}
                      merchandiseId={item.node.merchandise.id}
                      cartId={cart.id as string}
                      title={item.node.merchandise.product.title}
                      variantTitle={item.node.merchandise.title}
                      price={selectedVariant?.node.price.amount}
                      image={selectedVariant?.node.image?.url}
                      quantity={item.node.quantity}
                    />
                  </li>
                )
              })}
            </ul>
            <CartResume
              subtotal={cart.cost.subtotalAmount.amount}
              total={cart.cost.totalAmount.amount}
              fee={cart.cost.totalTaxAmount?.amount}
            />
          </div>
        ) : (
          <span className="m-auto mt-20 block w-max text-xl font-bold">O carrinho está vazio :{'('}</span>
        )}
      </SheetContent>
    </Sheet>
  )
}

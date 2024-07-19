export function CartResume() {
  return (
    <div className="mb-8">
      <div className="flex w-full items-center justify-between">
        <span>Subtotal</span>
        <span>R$ 12.599,00</span>
      </div>
      <div className="my-3 h-[1px] w-full bg-zinc-700" />
      <div className="flex w-full items-center justify-between">
        <span>Entrega</span>
        <span className="uppercase">Gratis</span>
      </div>
      <div className="my-3 h-[1px] w-full bg-zinc-700" />
      <div className="flex w-full items-center justify-between">
        <span>Total</span>
        <span>R$ 12.599,00</span>
      </div>
      <button className="mt-6 w-full bg-white py-2 text-black">Finalizar compra</button>
    </div>
  )
}

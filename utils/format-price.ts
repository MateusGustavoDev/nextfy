export function formatPriceBrl(price: string): string {
  const priceNumber = Number(price)
  return priceNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

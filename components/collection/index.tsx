import Image from 'next/image'
import Link from 'next/link'

export function Collection() {
  return (
    <Link href="/product">
      <div className="m-auto flex w-full max-w-screen-wrapper flex-col gap-4">
        <span className="text-2xl">Novidaddes</span>
        <div className="relative flex w-full gap-5 overflow-x-scroll">
          {products.map((product) => (
            <div key={product.title} className="w-[400px]">
              <div className="relative h-[270px] w-[270px] bg-black">
                <Image
                  src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75 "
                  alt="Nome do produto"
                  style={{ objectFit: 'contain' }}
                  fill
                />
              </div>
              <div className="flex flex-col gap-2 py-2">
                <span className="text-lg">{product.title}</span>
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

export const products = [
  {
    title: 'Mackbook Air 13',
    price: 'R$ 12.599,00',
  },
  {
    title: 'Mackbook Pro 14',
    price: 'R$ 16.999,00',
  },
  {
    title: 'iPhone 13 Pro',
    price: 'R$ 9.499,00',
  },
  {
    title: 'iPad Pro 11',
    price: 'R$ 8.599,00',
  },
  {
    title: 'Apple Watch Series 7',
    price: 'R$ 3.999,00',
  },
  {
    title: 'AirPods Pro',
    price: 'R$ 2.299,00',
  },
  {
    title: 'Apple TV 4K',
    price: 'R$ 1.299,00',
  },
]

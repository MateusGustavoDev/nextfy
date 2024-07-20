import Image from 'next/image'

export function Gallery() {
  return (
    <div className="relative aspect-[700/600] h-max w-full max-w-[700px] bg-zinc-900">
      <Image
        src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
        fill
        alt=""
        style={{ objectFit: 'contain' }}
      />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-5">
        <button className="border border-zinc-700 bg-black p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
            style={{ objectFit: 'contain' }}
          />
        </button>
        <button className="border border-zinc-700 bg-black p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
            style={{ objectFit: 'contain' }}
          />
        </button>
        <button className="border border-zinc-700 bg-black p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
            style={{ objectFit: 'contain' }}
          />
        </button>
      </div>
    </div>
  )
}

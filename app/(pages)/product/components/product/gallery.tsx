import Image from 'next/image'

export function Gallery() {
  return (
    <div className="relative flex aspect-[700/600] h-max w-full max-w-[700px] items-center justify-center border border-black bg-white">
      <Image
        src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
        width={0}
        height={0}
        sizes="100vw"
        className="h-690 w-auto"
        alt=""
      />
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-5">
        <button className="border border-black bg-white p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
          />
        </button>
        <button className="border border-black bg-white p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
          />
        </button>
        <button className="border border-black bg-white p-2">
          <Image
            src="https://nextjs-commerce-psi-opal.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F1454%2F5036%2Ffiles%2Fmba13-m3-midnight-gallery1-202402.png%3Fv%3D1721267948&w=1920&q=75"
            width={70}
            height={70}
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

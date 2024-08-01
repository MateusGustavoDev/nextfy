/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      { protocol: 'https', hostname: 'nextjs-commerce-psi-opal.vercel.app' },
    ],
  },
}

export default nextConfig

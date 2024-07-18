/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-commerce-psi-opal.vercel.app',
        port: '',
      },
    ],
  },
}

export default nextConfig

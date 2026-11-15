import type { NextConfig } from 'next'
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        port: '',
        pathname: '/system/**',
        search: '',
      },
    ],
  },
}
export default config
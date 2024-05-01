/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.blockfrost.io'
      }
    ]
  },

  async redirects() {
    return [{ source: '/', destination: '/cs', permanent: true }]
  }
}

export default nextConfig

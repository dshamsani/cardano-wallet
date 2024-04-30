/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  async redirects() {
    return [{ source: '/', destination: '/cs', permanent: true }]
  }
}

export default nextConfig

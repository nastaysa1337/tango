/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/tango',
  assetPrefix: '/tango/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig

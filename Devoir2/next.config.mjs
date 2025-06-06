/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/SEG3525-Assignments/Devoir2/out',
  assetPrefix: '/SEG3525-Assignments/Devoir2/out/',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

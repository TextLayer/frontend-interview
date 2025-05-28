/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Enable turbopack
    },
  },
  typescript: {
    // Type checking during build
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig 
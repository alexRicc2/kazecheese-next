/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.shopify.com',
      // other hostnames here
    ]
  },
}

module.exports = nextConfig

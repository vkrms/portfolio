/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: 'media.contra.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        hostname: 'screencastify.com',
      },
    ],
  },
}

module.exports = nextConfig

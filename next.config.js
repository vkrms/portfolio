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
      {
        hostname: 'random.imagecdn.app',
      },
      {
        hostname: 'drive.google.com',
      },
      {
        hostname: 'images.ctfassets.net',
      }
    ],
  },
}

module.exports = nextConfig

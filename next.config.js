/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'yodezeen.com',
      },
    ],
  },
}

module.exports = nextConfig

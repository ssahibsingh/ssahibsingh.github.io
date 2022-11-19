/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['github.com', 'github-readme-stats.vercel.app'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://ssahibsingh.github.io/l/resume',
        permanent: false,
      },
      {
        source: '/hello',
        destination: '/#contact',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

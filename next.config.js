/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['github.com', 'github-readme-stats.vercel.app'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // {
          //   key: 'Content-Security-Policy',
          //   value: "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net http://localhost; style-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com http://localhost; font-src 'self' https://fonts.gstatic.com http://localhost; img-src 'self' data: github-readme-stats.vercel.app github.com localhost;",
          // },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'COEP require-corp',
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig

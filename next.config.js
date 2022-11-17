/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        // port: '',
        pathname: '/links/**',
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: '/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //         { key: 'Access-Control-Allow-Origin', value: '*' },
  //         { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
  //         { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, Cookies, X-Request-with, Accept, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
  //       ]
  //     }
  //   ]
  // },
}

module.exports = nextConfig

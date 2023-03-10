/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placekitten.com',
        // port: '',
        pathname: '/300/200/**',
      },
    ],
  },
};

module.exports = nextConfig;

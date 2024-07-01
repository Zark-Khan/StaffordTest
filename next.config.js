/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_API_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_API_HOST,
      },
      {
        protocol: "https",
        hostname: "www.w3schools.com",
      },
    ],
  },
};

module.exports = nextConfig;

import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from 'next';

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'moviesdatabase.p.rapidapi.com',
      },
    ],
  },
};

export default withPWA({
  ...nextConfig
})
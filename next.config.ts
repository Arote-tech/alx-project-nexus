import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['moviesdatabase.p.rapidapi.com'],
  },
};

export default withPWA({
  ...nextConfig
})
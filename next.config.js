/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

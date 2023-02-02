/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets.stickpng.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;

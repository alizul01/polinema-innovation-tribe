/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "media.licdn.com",
      "unsplash.com",
      "source.unsplash.com",
      "arcetros.vercel.app"
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

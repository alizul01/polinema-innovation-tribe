/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      require("unplugin-icons/webpack")({
        compiler: "jsx",
        jsx: "react",
        extension: "jsx",
      })
    );
    return config;
  },
  images: {
    domains: ["avatars.githubusercontent.com", "media.licdn.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

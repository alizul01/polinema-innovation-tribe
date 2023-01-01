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
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

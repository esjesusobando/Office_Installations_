import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    turbo: {
      root: ".",
    },
  },
};

export default nextConfig;

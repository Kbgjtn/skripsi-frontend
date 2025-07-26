import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/deteksi-teh",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

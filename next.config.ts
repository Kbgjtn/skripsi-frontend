import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // development
      /* {
        protocol: "http",
        hostname: "**",
      }, */
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hololivepro.com",
      },
      {
        protocol: "https",
        hostname: "hololive.hololivepro.com",
      },
      {
        protocol: "https",
        hostname: "holostars.hololivepro.com",
      },
    ],
  },
};

export default nextConfig;

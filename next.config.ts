import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2uvjal4nw1o1a.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;

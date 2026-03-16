import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "kleinbusse-paul.de", pathname: "/wp-content/uploads/**" },
    ],
    domains: ["kleinbusse-paul.de"],
  },
};
export default nextConfig;

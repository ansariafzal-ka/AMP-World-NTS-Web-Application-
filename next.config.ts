import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/cms',
        destination: '/portal/cms',
        permanent: false,
      },
      {
        source: '/cms/:path*',
        destination: '/portal/cms/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

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
        source: '/Become_An_Exam_Center',
        destination: '/Become_An_Exam_Centre',
        permanent: true,
      },

      {
        source: '/participating-institution',
        destination: '/Participating_Institution',
        permanent: true,
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

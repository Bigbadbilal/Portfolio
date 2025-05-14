import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co', // For Spotify album art
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;

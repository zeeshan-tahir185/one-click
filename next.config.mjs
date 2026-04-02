/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-cdn.cars24.com",
      },
      {
        protocol: "https",
        hostname: "media-ae.cars24.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://blog.oneclickhuman.com/:path*",
      },
    ];
  },
};

export default nextConfig;
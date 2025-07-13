/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/blog/:path*', // Match requests starting with /blog
          destination: 'https://blog.oneclickhuman.com/:path*', // Replace with your WordPress URL
        },
      ];
    },
  };
  
  export default nextConfig;
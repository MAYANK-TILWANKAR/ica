/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3bxih2enpc4c8.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;

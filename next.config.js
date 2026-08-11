/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Netlify's image function (IPX/sharp) is broken for this runtime and
    // returns 500s in production, so serve images directly instead.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

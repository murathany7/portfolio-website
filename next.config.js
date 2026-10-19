/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bike Logger showcase: a static page in public/bike-logger, served at /bike-logger.
  async rewrites() {
    return [
      { source: "/bike-logger", destination: "/bike-logger/index.html" },
      { source: "/bike-logger/", destination: "/bike-logger/index.html" },
    ];
  },
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

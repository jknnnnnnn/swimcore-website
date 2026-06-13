/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "swimcore.pl",
          },
        ],
        destination: "https://www.swimcore.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

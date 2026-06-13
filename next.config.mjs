/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "swimcore.pl",
          },
        ],
        destination: "https://www.swimcore.pl/",
        statusCode: 301,
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "www.swimcore.pl",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.swimcore.pl/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "swimcore.pl",
          },
        ],
        destination: "https://www.swimcore.pl/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.swimcore.pl",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.swimcore.pl/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

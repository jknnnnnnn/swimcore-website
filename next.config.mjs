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
            value: "www.swimcore.pl",
          },
        ],
        destination: "https://swimcore.pl/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.swimcore.pl",
          },
        ],
        destination: "https://swimcore.pl/:path*",
        statusCode: 301,
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "swimcore.pl",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://swimcore.pl/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "swimcore.pl",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://swimcore.pl/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

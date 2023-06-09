/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wine.com.br",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/vinhos",
        permanent: true,
      },
      {
        source: "/vinhos/1",
        destination: "/vinhos",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

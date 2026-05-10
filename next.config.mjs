const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "almashines.s3.dualstack.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default nextConfig;
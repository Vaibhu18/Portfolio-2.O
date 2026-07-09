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
      {
        protocol: "https",
        hostname: "recruitment.tccollege.org"
      }
    ],
  },
};

export default nextConfig;
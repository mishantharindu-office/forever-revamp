/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "abacusecom.s3.ap-southeast-1.amazonaws.com", // S3 bucket
      "lh3.googleusercontent.com", // for Google user images
    ],
  },
};

export default nextConfig;

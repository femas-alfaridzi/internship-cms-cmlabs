/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // abaikan error eslint saat build
  },
};

export default nextConfig;

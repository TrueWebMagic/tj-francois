/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.vitalsocials.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

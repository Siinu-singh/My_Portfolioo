import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false, // Set to false for robust Vercel builds
  },
  eslint: {
    ignoreDuringBuilds: false, // Set to false for robust Vercel builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'elearningindustry.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'developers.arcgis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.amritsardigitalacademy.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['res.cloudinary.com'], // Add Cloudinary as a trusted domain
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern JS features
  swcMinify: true,
  experimental: {
    // Enables modern JS compilation
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    }
  },
  // Target modern browsers only
  webpack: (config, { dev, isServer }) => {
    // Custom webpack config
    if (!dev && !isServer) {
      // Enable modern JS features in production client bundles
      config.target = 'esnext';
    }
    return config;
  }
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Modern JS optimizations
 /*    modularizeImports: {
      '@mui/material': {
        transform: '@mui/material/{{member}}',
      },
      '@mui/icons-material': {
        transform: '@mui/icons-material/{{member}}',
      }
    } */
  },
  // Configure webpack with supported target
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.target = 'web';  // Using 'web' instead of 'esnext'
      
      // Optional: Add modern JavaScript optimizations
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        minimize: true,
      };
    }
    return config;
  }
};

export default nextConfig;
import type { NextConfig } from "next";

// Configuración principal para Next.js
const nextConfig: NextConfig = {
  // Minificación con SWC
  swcMinify: true,

  // Experimental: modularización de imports de MUI y chunking mejorado
  // (TypeScript no tipa estas propiedades, por lo que las convertimos a 'any')
  experimental: ({
    modularizeImports: {
      "@mui/material": { transform: "@mui/material/{{member}}" },
      "@mui/icons-material": { transform: "@mui/icons-material/{{member}}" }
    },
    modern: true,
    polyfillsOptimization: true,
    granularChunks: true
  } as any),

  // Personalización de Webpack en producción cliente
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              priority: 10
            },
            commons: {
              name: "commons",
              minChunks: 2,
              chunks: "all",
              priority: 5
            }
          }
        },
        moduleIds: "deterministic",
        runtimeChunk: { name: "runtime" }
      };
    }
    return config;
  },

  // Timeout para generación estática/ISR
  staticPageGenerationTimeout: 60
};

export default nextConfig;

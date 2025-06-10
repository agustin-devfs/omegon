import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    // Puedes agregar otras opciones experimentales aquí si es necesario
  },

  // Descompón los imports de MUI, Icons y Lucide a nivel de componente
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}"
    },
    "lucide-react": {
      transform: "lucide-react/lib/{{member}}"
    }
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Forzar target web para bundles más ligeros
      config.target = "web";

      // Optimización de chunks
      config.optimization = {
        ...config.optimization,
        moduleIds: "deterministic",   // IDs estables entre builds
        runtimeChunk: "single",       // runtime compartido en un único archivo
        splitChunks: {
          chunks: "all",
          maxSize: 200_000,           // fragmenta si >200 KB
          cacheGroups: {
            mui: {
              test: /[\\/]node_modules[\\/]@mui[\\/]/,
              name: "mui",
              priority: 20,
            },
            three: {
              test: /[\\/]node_modules[\\/]three[\\/]/,
              name: "three",
              priority: 15,
            },
            icons: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: "icons",
              priority: 10,
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
            },
          },
        },
        minimize: true,               // asegura minificación
      };
    }
    return config;
  },

  // Cache prolongado para estáticos
  async headers() {
    return [
      {
        source: "/:all*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  }
};

export default nextConfig;

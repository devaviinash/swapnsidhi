/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration for module resolution
  webpack: (config) => {
    config.resolve.extensions = ['.js', '.jsx', '.json', '.ts', '.tsx', ...config.resolve.extensions];
    return config;
  },
  // Enabling strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },

  // Optimizing fonts
  optimizeFonts: true,

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Headers for better mobile experience
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Viewport-Width',
            value: 'device-width'
          },
          {
            key: 'Content-Security-Policy',
            value: "style-src 'self' 'unsafe-inline'; font-src 'self' data: https://fonts.gstatic.com"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  },
}

module.exports = nextConfig;
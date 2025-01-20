/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        dns: false,
        tls: false,
        fs: false,
        request: false,
      };
    }
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            removeViewBox: false,
            dimensions: false,
          },
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする
  },
};

export default nextConfig;

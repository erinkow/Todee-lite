/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.clerk.com'],
    },
    // webpack: (config, { dev, isServer }) => {
    //   if (dev) {
    //     config.devtool = 'source-map';
    //   }
    //   return config;
    // },
};

export default nextConfig;

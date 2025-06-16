import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    i18n: {
        locales: ['ko', 'en'],
        defaultLocale: 'ko',
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;

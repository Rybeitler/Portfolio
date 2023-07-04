/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'repository-images.githubusercontent.com',
                port: '',
                pathname: '/**/**',
            },
        ],
    },
}

module.exports = nextConfig

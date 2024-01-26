/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {   
                hostname: 'raw.githubusercontent.com',
                           // .githubusercontent.com
            }
        ],
    }
};

export default nextConfig;

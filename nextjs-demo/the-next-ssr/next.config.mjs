/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'oxhvogqvwgzguvrfkxzv.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/cabin_images/**',
            }
        ]
    },
    // output: "export" <== static site,
};

export default nextConfig;

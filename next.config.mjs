/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // hostname: ["cms.vietnamreport.net"],
        domains: ["cdn.tgdd.vn"],
        remotePatterns: [
            {
                hostname: "cms.vietnamreport.net",
            },
        ],
    },
};

export default nextConfig;

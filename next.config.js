/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["utfs.io"],
    },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
    output: "standalone",
};

module.exports = nextConfig;

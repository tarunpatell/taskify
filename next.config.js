/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        //will only be available on the server side
        userEndpoint: "NEXT_PUBLIC_BASE_URL"
    },
 
}

module.exports = nextConfig

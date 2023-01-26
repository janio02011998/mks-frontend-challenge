/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com']
  },
  publicRuntimeConfig: {
    API: process.env.API
  }
}

module.exports = nextConfig

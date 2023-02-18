/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !environment
})

const nextConfig = withPWA({
  reactStrictMode: true
})

module.exports = nextConfig

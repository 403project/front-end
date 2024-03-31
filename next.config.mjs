// const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
// const withVanillaExtract = createVanillaExtractPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = withVanillaExtract(nextConfig);

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  images: {
    domains: ["png.pngtree.com", "images.prlc.kr", "cdn.digitaltoday.co.kr"],
  },
};

export default withVanillaExtract(nextConfig);

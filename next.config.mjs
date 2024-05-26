/** @type {import('next').NextConfig} */

import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./lib/env");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: "res.cloudinary.com",
    }, {
      hostname: "picsum.photos",
    }]
  }
};

export default nextConfig;

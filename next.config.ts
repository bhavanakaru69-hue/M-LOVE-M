import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    '10.137.99.6', 
    'local-origin.dev', 
    '*.local-origin.dev'
  ],
};

export default nextConfig;
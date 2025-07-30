import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing config options can go here...

  // Disable ESLint during builds (use with caution)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

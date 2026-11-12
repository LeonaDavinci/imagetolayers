import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Two pages answered the same question — "what does trying this cost me?"
    // — from different angles, so they were merged into /image-to-layers/free.
    // Permanent redirects keep whatever equity the old URLs picked up.
    return [
      {
        source: "/ai-layer-splitter-no-sign-in",
        destination: "/image-to-layers/free",
        permanent: true,
      },
      {
        source: "/image-to-layers/online",
        destination: "/image-to-layers/free",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy WordPress URLs from the 2014 site -> new structure.
      { source: "/roof-restoration-brisbane", destination: "/services/roof-restoration", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;

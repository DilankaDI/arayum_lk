// import type { NextConfig } from "next";

// const config: NextConfig = {
//   output: "export",
//   trailingSlash: true,
// };

// export default config;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

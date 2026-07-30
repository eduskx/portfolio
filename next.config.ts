import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projektordner als Workspace-Root festlegen (verhindert Fehl-Detektion
  // durch eine fremde package-lock.json im Home-Verzeichnis).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

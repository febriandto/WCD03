// filepath: /Users/febriandriyanto/Developments/JS/assignment4/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shadcn": path.resolve(__dirname, "node_modules/shadcn"),
      "@": path.resolve(__dirname, "src"), // Alias ke folder src
    },
  },
});

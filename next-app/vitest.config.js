/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: [
      "**/node_modules/*",
      "**/dist/*",
      "**/cypress/*",
      "**/e2e/*",
      "node_modules",
    ],
  },
});

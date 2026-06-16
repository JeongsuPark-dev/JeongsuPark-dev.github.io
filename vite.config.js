import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages user site의 빌드 산출물이 /build/ 하위에 배포됨.
// dev 서버는 루트(/)로 동작하도록 process.env로 base만 분기.
const base = process.env.VITE_BASE ?? "/build/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? base : "/",
  plugins: [react()],
  build: {
    outDir: "build",
    sourcemap: false,
    chunkSizeWarningLimit: 800,
  },
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
    css: false,
  },
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// gh-pages 브랜치 배포 — 루트(/)로 서빙됨.
// 기존 /build/ URL은 public/404.html의 redirect 로직으로 호환.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig(() => ({
  base,
  plugins: [
    // .js 파일에 JSX가 섞여 있는 기존 코드 대응 (CRA 호환)
    react({ include: /\.(js|jsx|ts|tsx)$/ }),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.(js|jsx)$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
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

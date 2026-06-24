import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/zhixiang/" : "/",
  plugins: [
    react(),
    tailwindcss(),
    AutoImport({
      dts: "auto-imports.d.ts",
      include: [/\.[tj]sx?$/],
      imports: [
        "react",
        {
          "lucide-react": ["ChevronLeft", "ChevronRight"],
        },
      ],
      eslintrc: {
        enabled: false,
      },
    }),
    checker({
      typescript: {
        tsconfigPath: "tsconfig.app.json",
      },
      enableBuild: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

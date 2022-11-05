import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: { exclude: ["svelte-router-spa"] },
  resolve: {
    alias: {
      "@Tools": path.resolve(__dirname, "./src/components/tools"),
      "@Views": path.resolve(__dirname, "./src/components/views"),
      "@Api": path.resolve(__dirname, "./src/api"),
      "@Types": path.resolve(__dirname, "./src/types"),
      "@Store": path.resolve(__dirname, "./src/store"),
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Svg": path.resolve(__dirname, "./src/components/svg"),
      "@Locale": path.resolve(__dirname, "./src/locale")
    },
  },
});

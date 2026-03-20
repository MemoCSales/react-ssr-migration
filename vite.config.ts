import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  ssr: {
    noExternal: ['@rescui/button', '@rescui/card', '@rescui/tab-list', '@rescui/typography'],
  }
});

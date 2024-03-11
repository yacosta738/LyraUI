/** @type {import("vite").UserConfig} */
import { resolve } from "path";
export const sharedViteConfig = (dirname) => ({
  resolve: {
    alias: {
      "~": resolve(dirname, "src"),
      "@": resolve(dirname, "src"),
      mock: resolve(dirname, "../mock/src/routes")
    },
    mainFields: ["module"]
  },
  test: {
    globals: true,
    environment: "happy-dom"
  }
});

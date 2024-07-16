import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";
import http from "https";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    css: {
        postcss: "postcss.config.js",
    },
    build: {
        rollupOptions: {
            input: "src/index.tsx", // Update this path if your entry point is different
        },
    },
});

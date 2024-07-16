import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    css: {
        postcss: "client/postcss.config.js",
    },
    build: {
        rollupOptions: {
            input: "src/index.tsx", // Update this path if your entry point is different
        },
    },
    publicDir: "client/public",
});

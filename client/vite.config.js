import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    root: ".",
    base: "/",
    plugins: [react()],
    optimizeDeps: {
        include: ["react/jsx-dev-runtime"],
    },
    css: {
        postcss: "client/postcss.config.js",
    },
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "index.html",
        },
        emptyOutDir: true,
    },
    publicDir: "public",
});

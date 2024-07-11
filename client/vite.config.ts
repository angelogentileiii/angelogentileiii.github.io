import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";
import http from "https";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    build: {
        rollupOptions: {
            input: "src/index.tsx", // Update this path if your entry point is different
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        css: true,
        reporters: ["verbose"],
        coverage: {
            reporter: ["text", "json", "html"],
            include: ["src/**/*"],
            exclude: configDefaults.exclude,
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:5500/",
                changeOrigin: true,
                secure: false,
                ws: true,
                rewrite: (path) => {
                    console.log(`Proxying request: ${path}`);
                    return path.replace(/^\/api/, "");
                },
                agent: new http.Agent(),
            },
        },
    },
});

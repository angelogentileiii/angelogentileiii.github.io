import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isProduction = mode === "production";

    return {
        root: "client",
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
                input: "src/index.tsx",
            },
        },
        publicDir: isProduction ? "public" : "client/public",
    };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isProduction = mode === "production";

    return {
        base: "/",
        plugins: [react()],
        optimizeDeps: {
            include: ["react/jsx-dev-runtime"],
        },
        css: {
            postcss: "client/postcss.config.js",
        },
        build: {
            rollupOptions: {
                input: "src/index.tsx", // Update this path if your entry point is different
            },
        },
        publicDir: isProduction ? "public" : "client/public",
    };
});

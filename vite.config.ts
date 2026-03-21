import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~assets": resolve(__dirname, "src/assets"),
            "~components": resolve(__dirname, "src/components"),
            "~constants": resolve(__dirname, "src/constants"),
            "~pages": resolve(__dirname, "src/pages"),
            "~router": resolve(__dirname, "src/router"),
            "~styles": resolve(__dirname, "src/styles"),
            "~types": resolve(__dirname, "src/types")
        }
    }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    server: {
        host: "0.0.0.0",
        port: 4000,
    },
    preview: {
        host: "0.0.0.0",
        port: 4001,
    },
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
        tsconfigPaths(),
    ],
});

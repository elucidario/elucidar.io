import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import dotenv from "dotenv";

import contentCollections from "@content-collections/vite";

dotenv.config({ path: [`.env.${process.env.NODE_ENV}`] });

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
        ...(process.env.NODE_ENV !== "development"
            ? [cloudflare({ viteEnvironment: { name: "ssr" } })]
            : []),
        tsconfigPaths(),
        contentCollections(),
        tanstackStart({
            srcDirectory: "src",
        }),
        tailwindcss(),
        svgr(),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
});

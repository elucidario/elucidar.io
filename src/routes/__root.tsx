/// <reference types="vite/client" />
import { type PropsWithChildren } from "react";
import {
    HeadContent,
    Outlet,
    Scripts,
    createRootRoute,
} from "@tanstack/react-router";
import css from "@/styles/style.css?url";

import { UI } from "@/styles";

function RootComponent() {
    return (
        <RootDocument>
            <UI>
                <Outlet />
            </UI>
        </RootDocument>
    );
}

function RootDocument({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="pt-BR">
            <head>
                <HeadContent />
            </head>
            <body>
                {children}
                <script
                    defer
                    src="https://umami.elucidar.io/script.js"
                    data-website-id="6f1f5433-684a-4b60-bd67-5b3343838ec2"
                ></script>
            </body>
            <Scripts />
        </html>
    );
}

function NotFoundComponent() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                padding: "2rem",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "4rem", margin: "0" }}>404</h1>
            <p style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
                Página não encontrada
            </p>
            <a
                href="/"
                style={{ marginTop: "1rem", textDecoration: "underline" }}
            >
                Voltar para a página inicial
            </a>
        </div>
    );
}

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { title: "elucidar.io" },
        ],
        links: [
            { rel: "stylesheet", href: css },
            { rel: "icon", href: "/logo-elucidar.io.png" },
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
});

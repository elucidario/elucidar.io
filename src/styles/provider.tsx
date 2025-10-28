import { useEffect, type PropsWithChildren } from "react";
import { useUiActions, useUiTheme } from "./store";
import { cn } from "@/utils";

export function UI(props: PropsWithChildren) {
    const theme = useUiTheme();
    const { setTheme } = useUiActions();

    useEffect(() => {
        const mode = window.matchMedia("(prefers-color-scheme: dark)");

        if (mode.matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }

        mode.addEventListener("change", (e) => {
            if (e.matches) {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        });
    }, [setTheme]);

    return (
        <div
            className={cn(
                theme,
                "scroll-smooth",
                "min-h-screen",
                "box-border",
                "bg-light",
                "dark:bg-dark",
                "text-dark",
                "dark:text-light",
                "font-sans",
                "transition-colors",
                "duration-300"
            )}
            data-theme={theme}
        >
            {props.children}
        </div>
    );
}

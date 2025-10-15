import { useEffect, type PropsWithChildren } from "react";
import { useUiActions, useUiTheme } from "./store";
import { Base } from "@/layouts";
import "./style.css";

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

    return <Base theme={theme}>{props.children}</Base>;
}

import { cn } from "@/utils";
import type { TextProps } from "./types";
import { paragraphVariants } from "./variants";
import { createElement, type HTMLAttributes } from "react";

export function Text<
    Attributes extends HTMLAttributes<
        HTMLParagraphElement | HTMLSpanElement | HTMLElement
    >
>({
    element,
    children,
    className,
    mono,
    display,
    size,
    color,
    noMargin,
    ...props
}: TextProps<Attributes>) {
    element = element || "p";
    return createElement(
        element,
        {
            className: cn(
                paragraphVariants({
                    mono,
                    display,
                    size,
                    color,
                    noMargin:
                        typeof noMargin === "boolean"
                            ? noMargin
                            : element !== "p"
                            ? true
                            : noMargin,
                    className,
                })
            ),
            ...props,
        },
        children
    );
}

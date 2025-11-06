import { cn } from "@/utils";
import { xLineVariants } from "./variants";
import type { BaseLineProps } from "./types";
import { createElement, type HTMLAttributes } from "react";

import { pattern as patternStyle } from "@/styles";

export function BaseLine({
    className,
    element,
    children,
    top,
    bottom,
    pattern,
    ...props
}: BaseLineProps<HTMLAttributes<HTMLElement>>) {
    return createElement(
        element || "div",
        {
            className: cn(
                "base-line",
                xLineVariants({
                    top,
                    bottom,
                }),
                pattern && patternStyle(pattern),
                className
            ),
            ...props,
        },
        children
    );
}

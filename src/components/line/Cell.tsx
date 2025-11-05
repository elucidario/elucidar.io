import { type HTMLAttributes, createElement } from "react";
import { cn } from "@/utils";
import type { CellProps } from "./types";
import { yLineVariants } from "./variants";

export function Cell<Attributes extends HTMLAttributes<any>>({
    children,
    className,
    left,
    right,
    element,
    ...props
}: CellProps<Attributes>) {
    return createElement(
        element || "div",
        {
            className: cn(
                "cell",
                yLineVariants({
                    left,
                    right,
                }),
                className
            ),
            ...props,
        },
        children
    );
}

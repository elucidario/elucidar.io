import { cn } from "@/utils";
import type { LineProps } from "./types";
import { BaseLine } from "./BaseLine";
import { Cell } from "./Cell";
import type { HTMLAttributes } from "react";

export function Line<Attributes extends HTMLAttributes<any>>({
    right,
    left,
    top,
    bottom,
    className,
    children,
    ...props
}: LineProps<Attributes>) {
    return (
        <BaseLine top={top} bottom={bottom} className="px-4" {...props}>
            <Cell
                right={right}
                left={left}
                className={cn(
                    "line-content",
                    "w-full lg:w-260",
                    "min-h-fit",
                    "m-auto",
                    "flex",
                    className
                )}
            >
                {children}
            </Cell>
        </BaseLine>
    );
}

import { cn } from "@/utils";
import { type VariantProps } from "class-variance-authority";
import { xLineVariants, yLineVariants } from "./variants";
import type { LineProps } from "./types";

export function Line({
    right,
    left,
    top,
    bottom,
    className,
    children,
    ...props
}: LineProps &
    VariantProps<typeof xLineVariants> &
    VariantProps<typeof yLineVariants>) {
    return (
        <div
            className={cn(
                xLineVariants({
                    top,
                    bottom,
                })
            )}
            {...props}
        >
            <div
                className={cn(
                    "line-content",
                    "w-260",
                    "m-auto",
                    "flex",
                    yLineVariants({
                        left,
                        right,
                    }),
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

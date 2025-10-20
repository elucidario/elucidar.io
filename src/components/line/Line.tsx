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
                }),
                "md:px-4"
            )}
            {...props}
        >
            <div
                className={cn(
                    "line-content",
                    "w-sm md:w-full lg:w-260",
                    "min-h-fit",
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

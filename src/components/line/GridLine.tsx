import { cn } from "@/utils";
import { BaseLine } from "./BaseLine";
import type { GridLineProps } from "./types";

export function GridLine({
    className,
    children,
    top,
    bottom,
    pattern,
    ...props
}: GridLineProps) {
    return (
        <BaseLine
            top={top}
            bottom={bottom}
            pattern={pattern}
            className={cn("grid-line")}
            {...props}
        >
            <div
                className={cn(
                    "flex flex-col md:grid md:grid-cols-12",
                    "md:gap-x-4",
                    "px-4 md:px-0",
                    "max-w-260 w-full",
                    "mx-auto",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </BaseLine>
    );
}

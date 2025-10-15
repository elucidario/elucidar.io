import type { HTMLAttributes } from "react";
import { cn } from "@/utils";
import type { BaseLayoutProps } from "./type";

export function Base({
    className,
    children,
    theme,
    ...props
}: HTMLAttributes<HTMLDivElement> & BaseLayoutProps) {
    return (
        <div
            className={cn(
                theme,

                "min-h-screen",
                "overflow-x-auto",
                "relative",

                "box-border",
                "bg-light",
                "dark:bg-dark",
                "text-dark",
                "dark:text-light",
                "font-sans",
                "transition-colors",
                "duration-300",
                className
            )}
            data-theme={theme}
            {...props}
        >
            {children}
        </div>
    );
}

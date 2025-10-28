import type { HTMLAttributes } from "react";
import { cn } from "@/utils";
import type { BaseLayoutProps } from "./types";

export function Base({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement> & BaseLayoutProps) {
    return (
        <div className={cn(className)} {...props}>
            {children}
        </div>
    );
}

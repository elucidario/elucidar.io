import { cn } from "@/utils";
import type { TextProps } from "./types";

export function Text({ ref, children, className, ...props }: TextProps) {
    return (
        <p
            ref={ref}
            {...props}
            className={cn(
                "font-sans",
                "text-base",
                "text-dark dark:text-light",
                "md:text-lg",
                className
            )}
        >
            {children}
        </p>
    );
}

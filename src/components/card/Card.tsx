import { cn } from "@/utils";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "p-4",
                "rounded-md",
                "w-full",
                "h-full",
                "bg-gray-95 dark:bg-gray-15",
                "transition-colors",
                "duration-300",
                "drop-shadow-md",
                className
            )}
            {...props}
        />
    );
}

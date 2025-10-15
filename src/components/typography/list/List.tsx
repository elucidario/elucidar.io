import { cn } from "@/utils";
import type { ListProps } from "./types";

export function List({ className, ...props }: ListProps) {
    return (
        <ul
            className={cn(
                "list-disc pl-5",
                "flex",
                "flex-col",
                "gap-2",
                className
            )}
            {...props}
        />
    );
}

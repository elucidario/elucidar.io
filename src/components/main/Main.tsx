import { JsonLD } from "@/components";
import type { MainProps } from "./types";
import { cn } from "@/utils/utils";

export function Main({ className, children, metadata, ...props }: MainProps) {
    return (
        <main className={cn("flex", "flex-col", className)} {...props}>
            {metadata && <JsonLD data={metadata} />}
            {children}
        </main>
    );
}

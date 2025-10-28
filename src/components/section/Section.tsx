import { cn } from "@/utils";
import type { SectionProps } from "./types";
import { JsonLD } from "@/components/json-ld";

export function Section<T extends Record<string, unknown>>({
    className,
    children,
    metadata,
    ...props
}: SectionProps<T>) {
    return (
        <section className={cn(className, "scroll-mt-40")} {...props}>
            {metadata && <JsonLD<T> data={metadata} />}
            {children}
        </section>
    );
}

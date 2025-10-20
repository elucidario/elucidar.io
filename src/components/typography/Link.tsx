import { cn } from "@/utils";
import type { LinkProps } from "./types";
import { SquareArrowOutUpRight } from "lucide-react";
import { buttonVariants } from "../button";
import type { VariantProps } from "class-variance-authority";

export function Link({
    href,
    variant,
    className,
    // active,
    children,
    external,
    ...props
}: LinkProps & VariantProps<typeof buttonVariants>) {
    return (
        <a
            {...props}
            href={href}
            className={cn(
                buttonVariants({
                    variant: variant || "link",
                    className,
                })
            )}
        >
            {children}
            {external && (
                <SquareArrowOutUpRight
                    className={cn("inline-block", "w-3", "h-3", "ml-1")}
                />
            )}
        </a>
    );
}

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/utils";
import type { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

export function Button({
    ref,
    className,
    variant,
    asChild = false,
    ...props
}: ButtonProps<VariantProps<typeof buttonVariants>>) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            ref={ref}
            className={cn(buttonVariants({ variant, className }))}
            {...props}
        />
    );
}

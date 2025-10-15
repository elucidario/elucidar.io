import { cn } from "@/utils";
import { type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { Line, xLineVariants, yLineVariants } from "../line";

type SpacingProps = HTMLAttributes<HTMLDivElement>;

export function Spacing({
    right = true,
    left = true,
    top = false,
    bottom = false,
    className,
    ...props
}: SpacingProps &
    VariantProps<typeof xLineVariants> &
    VariantProps<typeof yLineVariants>) {
    return (
        <Line
            right={right}
            left={left}
            top={top}
            bottom={bottom}
            className={cn("min-h-4", "h-4", className)}
            {...props}
        />
    );
}

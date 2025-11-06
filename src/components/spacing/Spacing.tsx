import { cn } from "@/utils";
import { type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { Cell, GridLine, xLineVariants, yLineVariants } from "../line";
import { pattern as patternStyles } from "@/styles";

type SpacingProps = HTMLAttributes<HTMLDivElement> & {
    pattern?: VariantProps<typeof patternStyles>;
};

export function Spacing({
    right = true,
    left = true,
    top = false,
    bottom = false,
    pattern,
    className,
    ...props
}: SpacingProps &
    VariantProps<typeof xLineVariants> &
    VariantProps<typeof yLineVariants>) {
    return (
        <GridLine
            top={top}
            bottom={bottom}
            className={cn(
                "spacing",
                "min-h-4",
                "h-4",
                pattern && patternStyles(pattern),
                className
            )}
            {...props}
        >
            <Cell
                right={right}
                left={left}
                className="col-start-1 col-end-13 flex w-full h-full"
            />
        </GridLine>
    );
}

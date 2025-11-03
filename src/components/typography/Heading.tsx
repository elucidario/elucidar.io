import type { HeadingProps } from "./types";
import { motion } from "motion/react";
import { headingVariants } from "./variants";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

export function Heading({
    level = 1,
    color,
    mono,
    display,
    className,
    children,
    noMargin,
    ...props
}: HeadingProps & VariantProps<typeof headingVariants>) {
    if (!level) {
        throw new Error("Heading level is required");
    }
    const Tag: React.ElementType = `h${level}`;
    const MotionComponent = motion.create(Tag);
    return (
        <MotionComponent
            className={cn(
                headingVariants({
                    color,
                    level,
                    className,
                    mono,
                    display,
                    noMargin,
                })
            )}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}

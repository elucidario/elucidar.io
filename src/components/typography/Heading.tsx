import type { HeadingProps } from "./types";
import { motion } from "motion/react";
import { headingVariants } from "./variants";
import type { VariantProps } from "class-variance-authority";

export function Heading({
    level = 1,
    color,
    className,
    children,
    ...props
}: HeadingProps & VariantProps<typeof headingVariants>) {
    if (!level) {
        throw new Error("Heading level is required");
    }
    const Tag: React.ElementType = `h${level}`;
    const MotionComponent = motion.create(Tag);
    return (
        <MotionComponent
            className={headingVariants({ color, level, className })}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}

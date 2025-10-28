import { cn } from "@/utils";
import type { FooterProps } from "./types";
import { mask, pattern } from "@/styles";
import { Spacing } from "../spacing";
import { motion, type HTMLMotionProps } from "motion/react";

export function Footer({
    ref,
    ...props
}: FooterProps & HTMLMotionProps<"footer">) {
    return (
        <motion.footer ref={ref} className="relative h-90" {...props}>
            <div
                className={cn(
                    "absolute",
                    "w-full",
                    "h-full",
                    "opacity-40",
                    pattern({
                        pattern: "dots",
                        patternColor: "blue",
                        patternLight: "h",
                        patternSize: "sm",
                    }),
                    mask({
                        className: [
                            "[--mask-from-color:rgba(0,0,0,0)]",
                            "[--mask-to-color:rgba(0,0,0,1)]",
                        ],
                    })
                )}
            ></div>
            <Spacing className="h-90" />
        </motion.footer>
    );
}

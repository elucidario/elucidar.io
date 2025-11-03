import { motion } from "motion/react";

import { cn } from "@/utils";
import type { LogoProps } from "./types";

import Elucidario from "./assets/elucidar.io.svg?react";
import ElucidarioArt from "./assets/elucidario.art.svg?react";

export function Logo({ name, className, ...props }: LogoProps) {
    return (
        <motion.div className={cn("flex", className)} {...props}>
            {name === "elucidar.io" ? (
                <Elucidario
                    className={cn(
                        "fill-dark",
                        "dark:fill-light",
                        "transition-colors",
                        "duration-300",
                        "w-fit",
                        "h-fit"
                    )}
                />
            ) : (
                <ElucidarioArt
                    className={cn(
                        "fill-dark",
                        "dark:fill-light",
                        "transition-colors",
                        "duration-300",
                        "w-fit",
                        "h-fit"
                    )}
                />
            )}
        </motion.div>
    );
}

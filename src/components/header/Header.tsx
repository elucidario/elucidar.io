import { useRef } from "react";
import { motion } from "motion/react";

import type { HeaderProps } from "./types";
import { cn } from "@/utils";
import { Logo } from "@/components/logo";
import { Menu } from "../menu";
import { Line } from "../line";
import { Spacing } from "../spacing";
import { Heading } from "../typography";
import { mask, pattern } from "@/styles";

export function Header({ className, ...props }: HeaderProps) {
    const headingRef = useRef<HTMLDivElement>(null);

    return (
        <motion.header
            ref={headingRef}
            className={cn("w-full", className)}
            {...props}
        >
            <div
                className={cn(
                    "absolute",
                    "-z-10",
                    "w-full",
                    "h-full",
                    "opacity-40",
                    pattern({
                        pattern: "dots",
                        patternColor: "pink",
                        patternLight: "h",
                        patternSize: "sm",
                    }),
                    mask()
                )}
            ></div>
            <Spacing className="h-10" />
            <Menu />
            <Spacing className="h-16" />
            <Line>
                <Logo name="elucidar.io" className={cn("h-12", "self-start")} />
            </Line>
            <Spacing />
            <Line>
                <Heading className={cn("font-mono", "text-pink-55")}>
                    Serviços e produtos tecnológicos para <br /> cultura,
                    educação e informação.
                </Heading>
            </Line>
        </motion.header>
    );
}

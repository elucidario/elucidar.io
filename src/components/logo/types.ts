import type { HTMLMotionProps } from "motion/react";

export type LogoProps = {
    name: "elucidar.io" | "elucidario.art";
    theme?: "light" | "dark";
} & React.HTMLAttributes<HTMLDivElement> &
    HTMLMotionProps<"div">;

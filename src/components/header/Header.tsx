import type { HeaderProps } from "./types";
import { cn } from "@/utils";
import { Logo, Spacing, Menu, Line } from "@/components";
import { mask, pattern } from "@/styles";

export function Header({ className, ...props }: HeaderProps) {
    return (
        <header
            className={cn(
                "header",
                "top-0",
                "sticky",
                "flex",
                "flex-col",

                "z-10",

                "bg-light dark:bg-dark",

                "w-full",
                "h-fit",
                className
            )}
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
            <Line>
                <Logo name="elucidar.io" className={cn("h-12", "self-start")} />
            </Line>
        </header>
    );
}

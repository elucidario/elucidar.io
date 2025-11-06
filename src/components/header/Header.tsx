import type { HeaderProps } from "./types";
import { cn } from "@/utils";
import { Logo, GridLine, Cell } from "@/components";
import { mask, pattern } from "@/styles";
import { Link } from "@tanstack/react-router";

export function Header({ className, children, menu, ...props }: HeaderProps) {
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
            {menu}
            <GridLine className="gap-0 md:gap-4">
                <Cell
                    className={cn(
                        "col-start-1",
                        children
                            ? ["col-span-4", "md:border-r-0"]
                            : ["col-span-12"]
                    )}
                >
                    <Link to="/">
                        <Logo name="elucidar.io" className="max-w-100" />
                    </Link>
                </Cell>
                {children && (
                    <Cell
                        className={cn(
                            "col-start-5",
                            "col-end-13",
                            "flex",
                            "items-end",
                            "md:border-l-0",
                            "pt-2"
                        )}
                    >
                        {children}
                    </Cell>
                )}
            </GridLine>
        </header>
    );
}

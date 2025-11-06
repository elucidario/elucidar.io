import { cn } from "@/utils";
import { MenuItem } from "./MenuItem";
import type { MenuProps } from "./types";
import { Spacing, Line } from "@/components";

export function Menu({ links }: MenuProps) {
    return (
        <>
            <Spacing />
            <Line element="nav">
                <ul
                    className={cn(
                        "flex",
                        "w-full",
                        "pl-2",
                        "justify-end-safe",
                        "md:px-4"
                    )}
                >
                    {links.map((link) => (
                        <MenuItem key={link.label} {...link} />
                    ))}
                </ul>
            </Line>
            <Spacing />
        </>
    );
}

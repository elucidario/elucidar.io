import { cn } from "@/utils";
import type { DeckProps } from "./types";
import { pattern as uiPattern } from "@/styles";

export function Deck({
    className,
    items,
    children,
    pattern,
    patternColor,
    patternLight,
    patternSize,
    ...props
}: DeckProps) {
    return (
        <ul
            className={cn(
                "flex",
                "flex-col md:flex-row",
                "gap-4",
                "p-4",
                uiPattern({ pattern, patternColor, patternLight, patternSize }),
                className
            )}
            {...props}
        >
            {items
                ? items.map((item, i) => (
                      <li className={cn("w-full", "h-full")} key={i}>
                          {item}
                      </li>
                  ))
                : children}
        </ul>
    );
}

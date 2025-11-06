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
                "flex-col",
                "gap-4",
                "p-4",
                "w-full",
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

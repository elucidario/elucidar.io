import { cn } from "@/utils";
import type { DeckProps } from "./types";

export function Deck({ className, items, children, ...props }: DeckProps) {
    return (
        <ul
            className={cn(
                "flex",
                "gap-4",
                "p-4",
                "border-x",
                "border-x-(--pattern-fg)",
                "bg-[image:repeating-linear-gradient(45deg,_var(--pattern-fg)_0,_var(--pattern-fg)_0.5px,_transparent_0,_transparent_50%)]",
                "bg-[size:8px_8px]",
                "bg-fixed",
                "[--pattern-fg:var(--color-gray-45)]/25",
                "max-lg:hidden",
                "dark:[--pattern-fg:var(--color-gray-95)]/10",
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

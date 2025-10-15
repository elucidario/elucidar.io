import type { HTMLAttributes, ReactNode } from "react";

export type DeckProps = HTMLAttributes<HTMLUListElement> & {
    items?: ReactNode[];
};

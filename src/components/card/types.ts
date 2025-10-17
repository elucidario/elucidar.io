import type { pattern } from "@/styles";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";

export type DeckProps = HTMLAttributes<HTMLUListElement> & {
    items?: ReactNode[];
} & VariantProps<typeof pattern>;

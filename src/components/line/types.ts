import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, HTMLElementType } from "react";
import type { xLineVariants, yLineVariants } from "./variants";
import type { pattern } from "@/styles";

export type BaseLineProps<Attributes extends HTMLAttributes<HTMLElement>> =
    Attributes &
        VariantProps<typeof xLineVariants> & {
            element?:
                | "div"
                | "section"
                | "article"
                | "header"
                | "footer"
                | "main"
                | "aside"
                | HTMLElementType;
            pattern?: VariantProps<typeof pattern>;
        };

export type CellProps<Attributes extends HTMLAttributes<HTMLElement>> =
    Attributes &
        VariantProps<typeof yLineVariants> & {
            ref?: React.Ref<HTMLDivElement>;
            element?: HTMLElementType;
        };

export type LineProps<Attributes extends HTMLAttributes<HTMLElement>> =
    BaseLineProps<Attributes> & CellProps<Attributes>;

export type GridLineProps = BaseLineProps<HTMLAttributes<HTMLDivElement>>;

import type { VariantProps } from "class-variance-authority";
import type { HTMLMotionProps } from "motion/react";
import type { paragraphVariants } from "./variants";
import type React from "react";
import type { HTMLAttributes } from "react";

export type LinkType = {
    href: string;
    active?: boolean;
    target?: React.HTMLAttributeAnchorTarget;
};

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
    LinkType & {
        active?: boolean;
        external?: boolean;
    };

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
    HTMLMotionProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export type LeadProps = React.HTMLAttributes<HTMLParagraphElement> &
    React.AriaAttributes;

export type TextProps<
    Attributes extends HTMLAttributes<
        HTMLParagraphElement | HTMLSpanElement | HTMLElement
    >
> = Attributes &
    VariantProps<typeof paragraphVariants> & {
        element?: "p" | "span" | "small";
    };

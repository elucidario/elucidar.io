import type { HTMLMotionProps } from "motion/react";

export type LinkType = {
    href: string;
    active?: boolean;
    target?: React.HTMLAttributeAnchorTarget;
};

export type LinkProps = React.PropsWithChildren<
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
        LinkType & {
            active?: boolean;
            external?: boolean;
        }
>;

export type HeadingProps = React.PropsWithChildren<
    React.HTMLAttributes<HTMLHeadingElement> &
        HTMLMotionProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">
>;

export type LeadProps = React.PropsWithChildren<
    React.HTMLAttributes<HTMLParagraphElement> & React.AriaAttributes
>;

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
    ref?: React.Ref<HTMLParagraphElement>;
};

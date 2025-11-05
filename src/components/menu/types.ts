import type { VariantProps } from "class-variance-authority";
import type { menuItemVariants } from "./variants";
import type { LinkOptions } from "@tanstack/react-router";

export type MenuItemProps = VariantProps<typeof menuItemVariants> & {
    options: LinkOptions;
    label: string;
};

export type MenuProps = {
    links: Array<VariantProps<typeof menuItemVariants> & MenuItemProps>;
};

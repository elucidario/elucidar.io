import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

export type MenuItemProps = AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof menuItemVariants>;

const menuItemVariants = cva(
    [
        "text-2xl",
        "font-semibold",
        "hover:underline",
        "transition-colors",
        "duration-300",
    ],
    {
        variants: {
            color: {
                pink: [
                    "text-pink-45",
                    "dark:text-pink-65",

                    "hover:text-pink-35",
                    "dark:hover:text-pink-75",
                ],
                blue: [
                    "text-blue-35",
                    "dark:text-blue-65",

                    "hover:text-blue-25",
                    "dark:hover:text-blue-75",
                ],
                gray: [
                    "text-gray-35",
                    "dark:text-gray-85",

                    "hover:text-gray-25",
                    "dark:hover:text-gray-95",
                ],
            },
        },
        defaultVariants: {
            color: "gray",
        },
    }
);

export function MenuItem({
    color,
    href,
    children,
    className,
    ...props
}: MenuItemProps) {
    return (
        <li>
            <a
                href={href}
                className={cn(menuItemVariants({ color, className }))}
                {...props}
            >
                {children}
            </a>
        </li>
    );
}

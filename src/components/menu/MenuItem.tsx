import { cn } from "@/utils";
import { type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

import { ClientOnly, Link } from "@tanstack/react-router";
import { menuItemVariants } from "./variants";

export type MenuItemProps = AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof menuItemVariants>;

export function MenuItem({
    color,
    href,
    children,
    className,
    ...props
}: MenuItemProps) {
    return (
        <li
            className={cn(
                "-ml-2",
                "border",
                "border-b-0",
                "border-l-0",
                "first:border-l",

                "rounded-tr-md",
                "first:rounded-t-md",
                "hover:z-10 hover:rounded-t-md",

                "overflow-hidden",

                "border-gray-45/25 dark:border-gray-65/25"
            )}
        >
            <ClientOnly
                fallback={
                    <a
                        href={href}
                        className={cn(
                            menuItemVariants({
                                color,
                                className: [
                                    className,
                                    "h-full",
                                    "w-full",
                                    "flex",
                                    "px-8",
                                ],
                            })
                        )}
                        {...props}
                    >
                        {children}
                    </a>
                }
            >
                <Link
                    to={"/"}
                    hash={href}
                    activeOptions={{
                        exact: true,
                        includeHash: true,
                    }}
                    className={cn(
                        menuItemVariants({
                            color,
                            className: [
                                className,
                                "h-full",
                                "w-full",
                                "flex",
                                "px-8",
                            ],
                        })
                    )}
                    {...props}
                >
                    {children}
                </Link>
            </ClientOnly>
        </li>
    );
}

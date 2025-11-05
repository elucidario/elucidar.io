import { cn } from "@/utils";

import { ClientOnly, Link } from "@tanstack/react-router";
import { menuItemLinkVariants, menuItemVariants } from "./variants";
import type { MenuItemProps } from "./types";

export function MenuItem({ color, label, options }: MenuItemProps) {
    return (
        <li className={cn("-ml-2", "w-full md:w-fit", "group")}>
            <ClientOnly
                fallback={
                    <a
                        href={options.to + (options.hash ?? "")}
                        className={cn(
                            menuItemLinkVariants({
                                color,
                            })
                        )}
                    >
                        <span className={cn(menuItemVariants({ color }))}>
                            {label}
                        </span>
                    </a>
                }
            >
                <Link
                    {...options}
                    activeOptions={{
                        includeHash: true,
                    }}
                    className={cn(
                        menuItemLinkVariants({
                            color,
                        })
                    )}
                >
                    <span className={cn(menuItemVariants({ color }))}>
                        {label}
                    </span>
                </Link>
            </ClientOnly>
        </li>
    );
}

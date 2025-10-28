import { cn } from "@/utils";
import { MenuItem } from "./MenuItem";
import { Line } from "../line";
import type { VariantProps } from "class-variance-authority";
import type { menuItemVariants } from "./variants";

const links: ({
    href: string;
    label: string;
} & VariantProps<typeof menuItemVariants>)[] = [
    {
        href: "servicos",
        label: "serviços",
        color: "pink",
    },
    {
        href: "produtos",
        label: "produtos",
        color: "blue",
    },
    {
        href: "contato",
        label: "contato",
        color: "gray",
    },
];

export function Menu() {
    return (
        <Line
            bottom={false}
            className={cn("hidden", "md:flex", "justify-end", "px-4")}
        >
            <nav>
                <ul className={cn("flex")}>
                    {links.map((link) => (
                        <MenuItem
                            key={link.href}
                            href={link.href}
                            color={link.color!}
                        >
                            {link.label}
                        </MenuItem>
                    ))}
                </ul>
            </nav>
        </Line>
    );
}

import { Menu, type MenuProps } from "@/components";
import { linkOptions } from "@tanstack/react-router";

const links: MenuProps["links"] = [
    {
        label: "serviços",
        color: "pink",
        options: linkOptions({
            to: "/",
            hash: "servicos",
        }),
    },
    {
        label: "produtos",
        color: "blue",
        options: linkOptions({
            to: "/",
            hash: "produtos",
        }),
    },
    {
        label: "contato",
        color: "gray",
        options: linkOptions({
            to: "/",
            hash: "contato",
        }),
    },
    // {
    //     label: "blog",
    //     color: "gray",
    //     options: linkOptions({
    //         to: "/blog",
    //     }),
    // },
];

export function PrimaryMenu() {
    return <Menu links={links} />;
}

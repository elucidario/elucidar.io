import { cva } from "class-variance-authority";

export const menuItemLinkVariants = cva(
    [
        "relative",
        "text-md",
        "font-mono",
        "transition-colors",
        "duration-100",

        "h-full",
        "w-full",
        "flex",
        "justify-center",

        "rounded-t-sm",
        "group-last:border-r",
        "data-active:border-r",

        "hover:font-semibold",

        "data-active:font-bold",
        "data-active:z-10",
    ],
    {
        variants: {
            color: {
                pink: [
                    "text-pink-15 hover:text-pink-35 dark:text-pink-65 dark:hover:text-pink-85",

                    "bg-pink-95/75 dark:bg-pink-15/75 hover:bg-pink-85 dark:hover:bg-pink-35",

                    "border-pink-45/75 dark:border-pink-65/75",

                    "data-active:bg-pink-85 data-active:dark:bg-pink-25",
                    "data-active:text-pink-15",
                    "data-active:dark:text-pink-85",
                ],
                blue: [
                    "text-blue-15 dark:text-blue-65 hover:text-blue-25 dark:hover:text-blue-75",

                    "bg-blue-95/75 dark:bg-blue-15/75 hover:bg-blue-85 dark:hover:bg-blue-35",

                    "border-blue-45/75 dark:border-blue-65/75",

                    "data-active:bg-blue-85 data-active:dark:bg-blue-25",
                    "data-active:text-blue-15",
                    "data-active:dark:text-blue-85",
                ],
                gray: [
                    "text-gray-15 dark:text-gray-85 hover:text-gray-25 dark:hover:text-gray-95",

                    "bg-gray-95/75 dark:bg-gray-15/75 hover:bg-gray-85 dark:hover:bg-gray-35",

                    "border-gray-45/75 dark:border-gray-65/75",

                    "data-active:bg-gray-85 data-active:dark:bg-gray-25",
                    "data-active:text-gray-15",
                    "data-active:dark:text-gray-85",
                ],
            },
        },
        defaultVariants: {
            color: "gray",
        },
    }
);

export const menuItemVariants = cva(
    [
        "w-full md:w-fit",
        "px-2 md:px-8",
        "flex",
        "justify-center",

        "shadow-sm",
        "border",
        "border-r-0",
        "rounded-t-sm",
    ],
    {
        variants: {
            color: {
                pink: [
                    "border-pink-45/75 dark:border-pink-65/75",
                    "group:[data-active]:bg-pink-95",
                ],
                blue: [
                    "border-blue-45/75 dark:border-blue-65/75",
                    "group:[data-active]:bg-blue-95",
                ],
                gray: [
                    "border-gray-45/75 dark:border-gray-65/75",
                    "group:[data-active]:bg-gray-95",
                ],
            },
        },
        defaultVariants: {
            color: "gray",
        },
    }
);

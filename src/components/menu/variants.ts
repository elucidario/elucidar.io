import { cva } from "class-variance-authority";

export const menuItemVariants = cva(
    [
        "relative",
        "text-md",
        "font-mono",
        "font-semibold",
        "transition-colors",
        "duration-100",
    ],
    {
        variants: {
            color: {
                pink: [
                    "text-pink-45",
                    "dark:text-pink-65",

                    "hover:text-pink-35",
                    "dark:hover:text-pink-85",

                    "hover:bg-pink-05 dark:hover:bg-pink-35",

                    "data-active:bg-pink-05 data-active:dark:bg-pink-25",
                    "data-active:rounded-t-md",
                    "data-active:text-pink-15",
                    "data-active:dark:text-pink-85",
                ],
                blue: [
                    "text-blue-35",
                    "dark:text-blue-65",

                    "hover:text-blue-25",
                    "dark:hover:text-blue-75",

                    "hover:bg-blue-05 dark:hover:bg-blue-35",

                    "data-active:bg-blue-05 data-active:dark:bg-blue-25",
                    "data-active:rounded-t-md",
                    "data-active:text-blue-15",
                    "data-active:dark:text-blue-85",
                ],
                gray: [
                    "text-gray-35",
                    "dark:text-gray-85",

                    "hover:text-gray-25",
                    "dark:hover:text-gray-95",

                    "hover:bg-gray-05 dark:hover:bg-gray-35",

                    "data-active:bg-gray-05 data-active:dark:bg-gray-25",
                    "data-active:rounded-t-md",
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

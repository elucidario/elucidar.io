import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    [
        "cursor-pointer",
        "inline-flex",
        "items-center",
        "justify-center",
        "whitespace-nowrap",
        "font-medium",
        "transition-colors",
        "duration-300",
        "ring-offset-pink-55",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",
        "focus-visible:ring-offset-2",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
    ],
    {
        variants: {
            variant: {
                default: [
                    "w-fit",
                    "px-4",
                    "py-2",
                    "font-mono",
                    "font-semibold",
                    "rounded-md",
                    "shadow-md",

                    "text-light",
                    "bg-gray-35",
                    "hover:bg-gray-15",
                    "dark:bg-gray-75",
                    "dark:hover:bg-gray-85",
                    "dark:text-dark",
                ],
                link: [
                    "text-primary",
                    "underline-offset-4",
                    "hover:underline",

                    "text-blue-75",
                    "dark:text-primary-light",

                    "hover:text-pink-dark",
                    "hover:dark:text-pink-55",

                    "hover:underline",
                    "underline-offset-2",

                    "ring-offset-pink-55",
                    "dark:ring-offset-pink-dark",

                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-ring",
                    "focus-visible:ring-offset-2",
                    "inline-block",
                ],
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

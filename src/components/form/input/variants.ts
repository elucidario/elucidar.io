import { cva } from "class-variance-authority";

export const inputVariants = cva(
    ["flex", "h-10", "w-full", "px-3", "py-2", "border", "rounded"],
    {
        variants: {
            variant: {
                default: [
                    // pallete
                    "border-pink-75",
                    "dark:border-pink-25",
                    "bg-light",
                    "dark:bg-dark",
                    "ring-offset-zinc-100",
                    "placeholder:text-zinc-500",
                    "focus-visible:ring-zinc-950",
                    "text-black",

                    // box
                    "border",
                    "rounded-sm",

                    "file:border-0",
                    "file:bg-transparent",
                    "file:text-sm",
                    "file:font-medium",

                    // states
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed",
                    "disabled:opacity-50",
                    "read-only:opacity-70",
                ],
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

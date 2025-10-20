import { cva } from "class-variance-authority";

export const headingVariants = cva(["heading", "font-semibold"], {
    variants: {
        color: {
            gray: ["text-gray-5", "dark:text-gray-85"],
            blue: ["text-blue-35", "dark:text-blue-65"],
            pink: ["text-pink-45", "dark:text-pink-65"],
        },
        level: {
            1: ["text-2xl"],
            2: ["text-xl"],
            3: ["text-lg"],
            4: ["text-base"],
            5: ["text-base"],
            6: ["text-sm"],
        },
    },
    defaultVariants: {
        color: "gray",
        level: 1,
    },
});

import { cva } from "class-variance-authority";

export const headingVariants = cva(["heading", "font-semibold", "text-wrap"], {
    variants: {
        mono: {
            true: ["font-mono"],
            false: ["font-sans"],
        },
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
        noMargin: {
            true: ["mb-0"],
            false: ["mb-4"],
        },
        display: {
            true: [],
            false: [],
        },
    },
    compoundVariants: [
        {
            display: true,
            level: 1,
            className: ["text-3xl md:text-4xl"],
        },
        {
            display: true,
            level: 2,
            className: ["text-2xl md:text-3xl"],
        },
        {
            display: true,
            level: 3,
            className: ["text-xl md:text-2xl"],
        },
        {
            display: true,
            level: 4,
            className: ["text-lg md:text-xl"],
        },
        {
            display: true,
            level: 5,
            className: ["text-lg md:text-xl"],
        },
        {
            display: true,
            level: 6,
            className: ["text-base md:text-lg"],
        },
    ],
    defaultVariants: {
        color: "gray",
        level: 1,
        mono: false,
        display: false,
        noMargin: false,
    },
});

export const paragraphVariants = cva(["text-base"], {
    variants: {
        mono: {
            true: ["font-mono"],
            false: ["font-sans"],
        },
        color: {
            none: [],
            default: ["text-dark", "dark:text-light"],
            gray: ["text-gray-5", "dark:text-gray-85"],
            blue: ["text-blue-35", "dark:text-blue-65"],
            pink: ["text-pink-45", "dark:text-pink-65"],
        },
        display: {
            true: ["text-lg", "md:text-xl", "font-semibold"],
            false: [],
        },
        size: {
            sm: ["text-sm", "md:text-base"],
            md: ["text-base", "md:text-lg"],
            lg: ["text-lg", "md:text-xl"],
        },
        noMargin: {
            true: ["mb-0"],
            false: ["mt-4", "mb-4"],
        },
    },
    defaultVariants: {
        size: "md",
        color: "default",
        mono: false,
        display: false,
        noMargin: false,
    },
});

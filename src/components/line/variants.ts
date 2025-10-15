import { cva } from "class-variance-authority";

export const xLineVariants = cva(["border-gray-55/25"], {
    variants: {
        top: {
            true: ["border-t"],
            false: [],
        },
        bottom: {
            true: ["border-b"],
            false: [],
        },
    },
    defaultVariants: {
        top: true,
        bottom: true,
    },
});

export const yLineVariants = cva(["border-gray-55/25"], {
    variants: {
        left: {
            true: ["border-l"],
            false: [],
        },
        right: {
            true: ["border-r"],
            false: [],
        },
    },
    defaultVariants: {
        left: true,
        right: true,
    },
});

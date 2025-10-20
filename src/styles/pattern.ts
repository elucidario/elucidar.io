import { cva } from "class-variance-authority";

export const pattern = cva(["bg-fixed"], {
    variants: {
        pattern: {
            linear: [
                "[--pattern-deg:45deg]",
                "bg-[image:repeating-linear-gradient(var(--pattern-deg),_var(--pattern-fg)_0,_var(--pattern-fg)_0.5px,_transparent_0,_transparent_50%)]",
            ],
            dots: [
                "bg-[radial-gradient(transparent_var(--pattern-size),_var(--pattern-fg)_var(--pattern-size))]",
            ],
        },
        patternColor: {
            light: [],
            dark: [],
            gray: [],
            blue: [],
            pink: [],
        },
        patternLight: {
            a: [],
            b: [],
            c: [],
            d: [],
            e: [],
            f: [],
            g: [],
            h: [],
            i: [],
            j: [],
        },
        patternSize: {
            sm: ["bg-size-[4px_4px]", "[--pattern-size:1px]"],
            md: ["bg-size-[8px_8px]", "[--pattern-size:2px]"],
            lg: ["bg-size-[12px_12px]", "[--pattern-size:4px]"],
            xl: ["bg-size-[16px_16px]", "[--pattern-size:6px]"],
        },
    },
    compoundVariants: [
        {
            patternColor: "blue",
            patternLight: "a",
            className: [
                "[--pattern-fg:var(--color-blue-5)]",
                "dark:[--pattern-fg:var(--color-blue-95)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "b",
            className: [
                "[--pattern-fg:var(--color-blue-15)]",
                "dark:[--pattern-fg:var(--color-blue-85)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "c",
            className: [
                "[--pattern-fg:var(--color-blue-25)]",
                "dark:[--pattern-fg:var(--color-blue-75)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "d",
            className: [
                "[--pattern-fg:var(--color-blue-35)]",
                "dark:[--pattern-fg:var(--color-blue-65)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "e",
            className: [
                "[--pattern-fg:var(--color-blue-45)]",
                "dark:[--pattern-fg:var(--color-blue-55)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "f",
            className: [
                "[--pattern-fg:var(--color-blue-55)]",
                "dark:[--pattern-fg:var(--color-blue-45)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "g",
            className: [
                "[--pattern-fg:var(--color-blue-65)]",
                "dark:[--pattern-fg:var(--color-blue-35)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "h",
            className: [
                "[--pattern-fg:var(--color-blue-75)]",
                "dark:[--pattern-fg:var(--color-blue-25)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "i",
            className: [
                "[--pattern-fg:var(--color-blue-85)]",
                "dark:[--pattern-fg:var(--color-blue-15)]",
            ],
        },
        {
            patternColor: "blue",
            patternLight: "j",
            className: [
                "[--pattern-fg:var(--color-blue-95)]",
                "dark:[--pattern-fg:var(--color-blue-5)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "a",
            className: [
                "[--pattern-fg:var(--color-pink-5)]",
                "dark:[--pattern-fg:var(--color-pink-95)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "b",
            className: [
                "[--pattern-fg:var(--color-pink-15)]",
                "dark:[--pattern-fg:var(--color-pink-85)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "c",
            className: [
                "[--pattern-fg:var(--color-pink-25)]",
                "dark:[--pattern-fg:var(--color-pink-75)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "d",
            className: [
                "[--pattern-fg:var(--color-pink-35)]",
                "dark:[--pattern-fg:var(--color-pink-65)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "e",
            className: [
                "[--pattern-fg:var(--color-pink-45)]",
                "dark:[--pattern-fg:var(--color-pink-55)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "f",
            className: [
                "[--pattern-fg:var(--color-pink-55)]",
                "dark:[--pattern-fg:var(--color-pink-45)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "g",
            className: [
                "[--pattern-fg:var(--color-pink-65)]",
                "dark:[--pattern-fg:var(--color-pink-35)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "h",
            className: [
                "[--pattern-fg:var(--color-pink-75)]",
                "dark:[--pattern-fg:var(--color-pink-25)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "i",
            className: [
                "[--pattern-fg:var(--color-pink-85)]",
                "dark:[--pattern-fg:var(--color-pink-15)]",
            ],
        },
        {
            patternColor: "pink",
            patternLight: "j",
            className: [
                "[--pattern-fg:var(--color-pink-95)]",
                "dark:[--pattern-fg:var(--color-pink-5)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "a",
            className: [
                "[--pattern-fg:var(--color-gray-5)]",
                "dark:[--pattern-fg:var(--color-gray-95)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "b",
            className: [
                "[--pattern-fg:var(--color-gray-15)]",
                "dark:[--pattern-fg:var(--color-gray-85)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "c",
            className: [
                "[--pattern-fg:var(--color-gray-25)]",
                "dark:[--pattern-fg:var(--color-gray-75)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "d",
            className: [
                "[--pattern-fg:var(--color-gray-35)]",
                "dark:[--pattern-fg:var(--color-gray-65)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "e",
            className: [
                "[--pattern-fg:var(--color-gray-45)]",
                "dark:[--pattern-fg:var(--color-gray-55)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "f",
            className: [
                "[--pattern-fg:var(--color-gray-55)]",
                "dark:[--pattern-fg:var(--color-gray-45)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "g",
            className: [
                "[--pattern-fg:var(--color-gray-65)]",
                "dark:[--pattern-fg:var(--color-gray-35)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "h",
            className: [
                "[--pattern-fg:var(--color-gray-75)]",
                "dark:[--pattern-fg:var(--color-gray-25)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "i",
            className: [
                "[--pattern-fg:var(--color-gray-85)]",
                "dark:[--pattern-fg:var(--color-gray-15)]",
            ],
        },
        {
            patternColor: "gray",
            patternLight: "j",
            className: [
                "[--pattern-fg:var(--color-gray-95)]",
                "dark:[--pattern-fg:var(--color-gray-5)]",
            ],
        },
    ],
});

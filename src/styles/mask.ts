import { cva } from "class-variance-authority";

export const mask = cva([
    "[--mask-from-color:rgba(0,0,0,1)]",
    "[--mask-to-color:rgba(0,0,0,0)]",
    "[--mask-from-position:25%]",
    "[--mask-to-position:95%]",
    "mask-[linear-gradient(var(--mask-from-color)_var(--mask-from-position),var(--mask-to-color)_var(--mask-to-position))]",
]);

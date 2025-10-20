import type { VariantProps } from "class-variance-authority";
import type { TextareaHTMLAttributes } from "react";
import { inputVariants } from "../input";
import { cn } from "@/utils";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
    variant,
    className,
    ...props
}: TextareaProps & VariantProps<typeof inputVariants>) {
    return (
        <textarea
            className={cn("min-h-20", inputVariants({ variant, className }))}
            {...props}
        />
    );
}

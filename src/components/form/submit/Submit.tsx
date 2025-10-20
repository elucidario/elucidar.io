import { type ButtonProps, Button, buttonVariants } from "@/components/button";
import { umamiProps } from "@/utils/umami";
import type { VariantProps } from "class-variance-authority";

export function Submit({
    children,
    track,
    ...props
}: ButtonProps<VariantProps<typeof buttonVariants>>) {
    return (
        <Button type="submit" {...(track ? umamiProps(track) : {})} {...props}>
            {children}
        </Button>
    );
}

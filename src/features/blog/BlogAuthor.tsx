import { Image, Text } from "@/components";
import { cn } from "@/utils";
import type { BlogAuthor } from "./types";
import type { HTMLAttributes } from "react";

export function BlogAuthor({
    className,
    name,
    email,
    image,
    description,
    content,
    _meta,
    ...props
}: BlogAuthor & HTMLAttributes<HTMLDivElement> & { _meta?: any }) {
    return (
        <div className={cn("thumb", "flex", "gap-4", className)} {...props}>
            <Image
                height={40}
                className={cn("rounded-full", "h-12")}
                src={image?.src}
                alt={image?.alt || name}
            />
            <div className={cn("flex flex-col")}>
                <Text mono noMargin element="span">
                    {name}
                </Text>
                <Text mono noMargin element="span" size={"sm"}>
                    {email}
                </Text>
            </div>
        </div>
    );
}

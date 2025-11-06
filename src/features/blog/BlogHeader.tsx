import { GridLine, Cell, Heading, Text, Image } from "@/components";
import { pattern } from "@/styles";
import { cn } from "@/utils";
import { BlogAuthor } from "./BlogAuthor";
import type { BlogHeaderProps } from "./types";

export function BlogHeader({
    title,
    publishedAt,
    author,
    image,
}: BlogHeaderProps) {
    return (
        <div
            className={cn(
                pattern({
                    pattern: "linear",
                    patternColor: "gray",
                    patternLight: "i",
                    patternSize: "md",
                })
            )}
        >
            <GridLine top={false} className={cn("bg-light dark:bg-dark")}>
                <Cell
                    className={cn(
                        "col-start-1 row-start-1 row-span-2 col-end-8 relative h-120"
                    )}
                >
                    <Image
                        className={cn(
                            "md:absolute right-0",
                            "md:max-w-260",
                            "w-dvw",
                            "h-120",
                            "md:h-full",
                            "object-cover"
                        )}
                        height={488}
                        alt={image?.alt || title}
                        src={image?.src}
                    />
                </Cell>
                <Cell
                    className={cn(
                        "col-start-8 col-end-13",
                        "flex flex-col",
                        "row-1",
                        "order-first md:order-2",
                        "md:border-l-0"
                    )}
                >
                    <Heading mono display level={1}>
                        {title}
                    </Heading>
                    <Text mono noMargin element="span">
                        {publishedAt}
                    </Text>
                </Cell>
                <Cell
                    className={cn(
                        "col-start-8 col-end-13 row-2 flex flex-col gap-4 justify-between h-full md:self-end",
                        "md:border-l-0"
                    )}
                >
                    <BlogAuthor className="md:order-first" {...author} />
                    <Text mono element="span" size="sm" className="order-first">
                        {image?.caption || image?.alt}
                    </Text>
                </Cell>
            </GridLine>
        </div>
    );
}

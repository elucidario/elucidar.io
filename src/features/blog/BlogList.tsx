import {
    buttonVariants,
    Cell,
    GridLine,
    Heading,
    Image,
    Spacing,
    Text,
} from "@/components";
import { cn } from "@/utils";
import { BlogAuthor } from "./BlogAuthor";
import type { BlogListProps } from "./types";
import { Link } from "@tanstack/react-router";
import { sortPostsByDate } from "./utils";
import { BlogPagination } from "./BlogPagination";

export function BlogList({
    posts,
    offset = 0,
    limit = 10,
    order,
}: BlogListProps) {
    const sortedPosts = sortPostsByDate(posts, order).slice(
        offset,
        offset + limit
    );

    const rows = (() => {
        const result = [];
        for (let i = 0; i < sortedPosts.length; i += 2) {
            result.push(sortedPosts.slice(i, i + 2));
        }
        return result;
    })();

    return (
        <>
            <BlogPagination
                total={posts.length}
                limit={limit}
                offset={offset}
            />
            <Spacing pattern={{ pattern: "linear" }} />
            <ul className={cn("flex", "flex-col", "gap-4")}>
                {rows.map((row, i) => {
                    return (
                        <GridLine
                            key={i}
                            pattern={{
                                pattern: "linear",
                            }}
                        >
                            {row.map((post) => (
                                <Cell
                                    key={post._meta.filePath}
                                    element="li"
                                    className={cn(
                                        "col-span-6",
                                        "bg-light dark:bg-dark",
                                        "border",
                                        "border-t-0",
                                        "border-b-0",
                                        "border-gray-45/25",
                                        "flex flex-col",
                                        "justify-between",
                                        "gap-4"
                                    )}
                                >
                                    <div className={cn("flex flex-col")}>
                                        <Link
                                            to={`/blog/${post._meta.path}`}
                                            className={cn(
                                                buttonVariants({
                                                    variant: "link",
                                                })
                                            )}
                                        >
                                            <Image
                                                src={post.image?.src || ""}
                                                alt={
                                                    post.image?.alt ||
                                                    post.title
                                                }
                                                width={600}
                                                height={400}
                                                className={cn(
                                                    "w-full",
                                                    "h-100",
                                                    "object-cover",
                                                    "mb-4"
                                                )}
                                            />
                                            <Heading level={2} mono>
                                                {post.title}
                                            </Heading>
                                        </Link>
                                    </div>
                                    <div
                                        className={cn(
                                            "flex",
                                            "items-end",
                                            "justify-between"
                                        )}
                                    >
                                        <BlogAuthor {...post.author} />
                                        <Text mono noMargin>
                                            {new Date(
                                                post.publishedAt
                                            ).toLocaleDateString()}
                                        </Text>
                                    </div>
                                </Cell>
                            ))}
                        </GridLine>
                    );
                })}
            </ul>
            <Spacing pattern={{ pattern: "linear" }} />
            <BlogPagination
                total={posts.length}
                limit={limit}
                offset={offset}
            />
        </>
    );
}

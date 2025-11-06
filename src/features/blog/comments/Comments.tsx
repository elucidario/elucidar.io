import { buttonVariants, Cell, GridLine, Heading, Text } from "@/components";
import { Mdx } from "@/components";
import { markdown } from "@/components/mdx/components";
import { cn } from "@/utils";
import { Link } from "@tanstack/react-router";
import type { allComments } from "content-collections";

export type CommentsProps = {
    url: string;
    comments: typeof allComments;
};

export function Comments({ url, comments }: CommentsProps) {
    return (
        <section id="comments">
            <GridLine>
                <Cell
                    className={cn(
                        "flex flex-col px-4 md:px-0",
                        "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                    )}
                >
                    <Heading
                        mono
                        level={2}
                        className={cn(
                            "m-0",
                            "flex gap-4",
                            "col-start-3 col-end-10 md:grid md:grid-cols-subgrid"
                        )}
                    >
                        <Link
                            to={url}
                            hash="comments"
                            className={cn(
                                buttonVariants({ variant: "link" }),
                                "justify-self-end"
                            )}
                        >
                            #
                        </Link>
                        <span className="col-start-2">Comentários</span>
                    </Heading>
                </Cell>
            </GridLine>
            <GridLine top={false} bottom={false}>
                <Cell
                    className={cn(
                        "px-4",
                        "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                    )}
                >
                    <ul className="col-start-4 col-span-6 grid grid-cols-subgrid gap-8 my-4">
                        {comments.map((comment) => (
                            <li
                                key={comment._meta.path}
                                className={cn(
                                    "col-start-1 col-span-7 flex flex-col"
                                )}
                            >
                                <Heading
                                    level={3}
                                    noMargin
                                    className={cn(
                                        "col-start-1 col-span-7 inline-flex justify-between gap-4",
                                        "border-b",
                                        "border-gray-45/25 dark:border-gray-65/25"
                                    )}
                                >
                                    <Text
                                        noMargin
                                        className="row-1 col-start-1 col-end-6 w-full inline-flex justify-between"
                                    >
                                        <span>{comment.author.name}</span>
                                        <time>
                                            {new Date(
                                                comment.publishedAt
                                            ).toLocaleDateString("pt-BR", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                            })}
                                        </time>
                                    </Text>
                                    <Link
                                        to={`/blog/comentarios/${comment._meta.path}`}
                                        className={cn(
                                            "row-1",
                                            "col-start-7",
                                            buttonVariants({ variant: "link" }),
                                            "justify-self-end"
                                        )}
                                    >
                                        #
                                    </Link>
                                </Heading>
                                <Mdx
                                    className={cn("mt-2")}
                                    code={comment.mdx}
                                    components={markdown}
                                />
                            </li>
                        ))}
                    </ul>
                </Cell>
            </GridLine>
            <GridLine top={false}>
                <Cell className="col-start-1 col-span-12">formulário</Cell>
            </GridLine>
        </section>
    );
}

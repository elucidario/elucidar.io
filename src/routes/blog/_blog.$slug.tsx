import { GridLine, Spacing, Text } from "@/components";
import { Mdx } from "@/components";
import { gridMarkdown } from "@/components/mdx/components";
import {
    BlogHeader,
    BlogSlug,
    Comments,
    PreviousNext,
    References,
} from "@/features";
import { createFileRoute, redirect } from "@tanstack/react-router";

import { allPosts } from "content-collections";

export const Route = createFileRoute("/blog/_blog/$slug")({
    beforeLoad: () => ({ allPosts }),
    loader: async ({ params, context: { allPosts } }) => {
        const post = allPosts.find((post) => post._meta.path === params.slug);

        if (!post) {
            throw redirect({ to: "/blog/" });
        }

        return { post };
    },
    component: RouteComponent,
});

function RouteComponent() {
    const { post } = Route.useLoaderData();

    const url = `/blog/${post._meta.path}`;

    return (
        <>
            <BlogSlug>
                <Text noMargin mono>
                    {url}
                </Text>
            </BlogSlug>
            <article className="h-full">
                <BlogHeader {...post} />
                <Mdx code={post.mdx} components={gridMarkdown} />
                <GridLine top={false} />
                <Spacing
                    className="h-10"
                    pattern={{
                        pattern: "linear",
                        patternColor: "gray",
                        patternLight: "i",
                        patternSize: "md",
                    }}
                />
                <References url={url} references={post.references} />
                <Spacing
                    className="h-10"
                    pattern={{
                        pattern: "linear",
                        patternColor: "gray",
                        patternLight: "i",
                        patternSize: "md",
                    }}
                />
                <Comments url={url} comments={post.comments} />
            </article>
            <Spacing
                className="h-20"
                pattern={{
                    pattern: "linear",
                    patternColor: "gray",
                    patternLight: "i",
                    patternSize: "md",
                }}
            />
            <PreviousNext previous={post.previous} next={post.next} />
        </>
    );
}

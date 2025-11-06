import { Footer, Header, Spacing, Text } from "@/components";
import { BlogList } from "@/features";
import { PrimaryMenu } from "@/features/menu";
import { blogParamsSchema } from "@/schemas";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";

import { allPosts } from "content-collections";

export const Route = createFileRoute("/blog/")({
    beforeLoad: ({ search }) => ({
        search,
    }),
    validateSearch: zodValidator(blogParamsSchema),
    component: RouteComponent,
});

function RouteComponent() {
    const { offset, limit, order } = Route.useSearch();

    return (
        <>
            <Header menu={<PrimaryMenu />}>
                <Text noMargin mono>
                    /blog
                </Text>
            </Header>
            <Spacing className="h-8" />
            <BlogList
                posts={allPosts}
                order={order}
                offset={offset}
                limit={limit}
            />
            <Footer />
        </>
    );
}

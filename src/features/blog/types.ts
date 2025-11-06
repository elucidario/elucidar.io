import type { authorSchema, postSchema, blogParamsSchema } from "@/schemas";
import type { allPosts } from "content-collections";

import type z from "zod";

export type BlogAuthor = z.infer<typeof authorSchema>;

export type BlogHeaderProps = Omit<z.infer<typeof postSchema>, "author"> & {
    author: BlogAuthor;
};

export type BlogListProps = {
    posts: typeof allPosts;
} & z.infer<typeof blogParamsSchema>;

import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {
    transformerMetaHighlight,
    transformerMetaWordHighlight,
    transformerNotationDiff,
} from "@shikijs/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { h } from "hastscript";

import {
    authorSchema,
    commentsSchema,
    postSchema,
    referenceSchema,
} from "./src/schemas";

import { buttonVariants } from "./src/components/button/variants";
import { sortPostsByDate } from "./src/features/blog/utils";

const authors = defineCollection({
    name: "authors",
    directory: "src/blog/authors",
    include: "*.mdx",
    schema: authorSchema,
});

const references = defineCollection({
    name: "references",
    directory: "src/blog/references",
    include: "**/*.json",
    parser: "json",
    schema: referenceSchema,
});

const comments = defineCollection({
    name: "comments",
    directory: "src/blog/comments",
    include: "**/*.mdx",
    schema: commentsSchema,
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
        });

        return {
            ...document,
            mdx,
        };
    },
});

const posts = defineCollection({
    name: "posts",
    directory: "src/blog/posts",
    include: "**/*.mdx",
    schema: postSchema,
    transform: async (document, context) => {
        const author = await context
            .documents(authors)
            .find((a) => a.name === document.author);

        const postReferences = await context
            .documents(references)
            .filter((r) => document.references?.includes(r._meta.path));

        const postComments = await context
            .documents(comments)
            .filter((c) => document.comments?.includes(c.uuid));

        if (!author) {
            throw new Error(
                `Author "${document.author}" not found for post "${document.title}"`
            );
        }

        const postList = sortPostsByDate(context.documents(posts), "asc");
        const idx = postList.findIndex(
            (p) => (p._meta as { path: string }).path === document._meta.path
        );

        const prev = idx > 0 ? postList[idx - 1] : null;
        const next = idx < postList.length - 1 ? postList[idx + 1] : null;

        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypePrettyCode,
                    {
                        theme: "material-theme-palenight",
                        transformers: [
                            transformerMetaHighlight(),
                            transformerMetaWordHighlight(),
                            transformerNotationDiff({
                                matchAlgorithm: "v3",
                            }),
                        ],
                        onVisitLine(node: any) {
                            // Prevent lines from collapsing in `display: grid` mode, and allow empty
                            // lines to be copy/pasted
                            if (node.children.length === 0) {
                                node.children = [{ type: "text", value: " " }];
                            }
                        },
                        onVisitHighlightedLine(node: any) {
                            node.properties.className.push("line--highlighted");
                        },
                        onVisitHighlightedWord(node: any) {
                            node.properties.className = ["word--highlighted"];
                        },
                    },
                ],
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: "prepend",
                        content: () => [h("span", "#")],
                        properties: {
                            className: [buttonVariants({ variant: "link" })],
                            ariaLabel: "Link to section",
                            ariaHidden: false,
                            tabIndex: 0,
                        },
                    },
                ],
            ],
        });

        return {
            ...document,
            mdx,
            previous: prev
                ? {
                      title: prev.title,
                      path: (prev._meta as { path: string }).path,
                  }
                : null,
            next: next
                ? {
                      title: next.title,
                      path: (next._meta as { path: string }).path,
                  }
                : null,
            author,
            references: postReferences,
            comments: postComments,
        };
    },
});

export default defineConfig({
    collections: [authors, references, comments, posts],
});

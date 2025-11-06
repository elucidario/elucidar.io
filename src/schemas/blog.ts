import { z } from "zod";

export const imageSchema = z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
});

export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().date(),
    author: z.string(),
    image: imageSchema.optional(),
    references: z.array(z.string()).optional(),
    comments: z.array(z.string().uuid()).optional(),
});

export const authorSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    description: z.string().max(240),
    image: imageSchema.optional(),
});

export const referenceSchema = z.object({
    title: z.string(),
    url: z.string().url().optional(),
    description: z.string().max(240).optional(),
});

export const commentsSchema = z.object({
    uuid: z.string().uuid(),
    author: z.object({
        name: z.string().min(2).max(100),
        email: z.string().email().optional(),
    }),
    publishedAt: z.string().date(),
});

export const blogParamsSchema = z.object({
    order: z.enum(["asc", "desc"]).default("desc"),
    offset: z.coerce
        .string()
        .transform((val) => parseInt(val, 10))
        .refine((val) => !isNaN(val) && val >= 0, {
            message: "Offset must be a non-negative integer",
        })
        .default("0"),
    limit: z.coerce
        .string()
        .transform((val) => parseInt(val, 10))
        .refine((val) => !isNaN(val) && val > 0 && val <= 100, {
            message: "Limit must be an integer between 1 and 100",
        })
        .default("10"),
});

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "[^_]*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = { blog };

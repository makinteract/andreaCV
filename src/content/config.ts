import { defineCollection, z } from 'astro:content';

const markdwon = defineCollection({
  type: 'content',
  schema: z.object({
    section: z.string(),
    title: z.string(),
  }),
});

export const collections = { markdown: markdwon };

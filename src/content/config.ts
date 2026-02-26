import { defineCollection, z } from 'astro:content';

const cv = defineCollection({
  type: 'content',
  schema: z.object({
    section: z.string(),
    title: z.string(),
  }),
});

export const collections = { cv };

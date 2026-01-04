import { z, defineCollection } from 'astro:content';

// 1. Define the schema (like a Go struct for your frontmatter)
const labsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// 2. Export it to register it with Astro
export const collections = {
  'labs': labsCollection,
};

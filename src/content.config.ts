import { randomUUID } from 'node:crypto';
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({
    base: 'src/content/blog',
    pattern: '**/*.{md,mdx}',
    generateId: () => randomUUID(),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: image(),
  }),
});

const hero = defineCollection({
  loader: glob({
    base: 'src/content/hero',
    pattern: 'index.md',
    generateId: () => 'hero',
  }),
  schema: ({ image }) => z.object({
    image: image(),
  }),
});

const about = defineCollection({
  loader: glob({
    base: 'src/content/about',
    pattern: 'index.md',
    generateId: () => 'about',
  }),
});

export const collections = { blog, hero, about };

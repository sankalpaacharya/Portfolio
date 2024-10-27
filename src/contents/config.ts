import { z, defineCollection } from 'astro:content';


export const collections = {
  'blog':  defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: z.string().optional(),
    }),
  }),
};
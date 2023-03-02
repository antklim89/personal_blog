import { IGatsbyImageData } from 'gatsby-plugin-image';
import { z } from 'zod';


export const postSchema = z.object({
    id: z.string(),
    body: z.string(),
    title: z.string(),
    createdAt: z.string(),
    imagePreview: z.object({
        gatsbyImageData: z.any() as z.ZodType<IGatsbyImageData>,
        url: z.string(),
        width: z.number(),
        height: z.number(),
    }),
});

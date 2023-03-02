import { IGatsbyImageData } from 'gatsby-plugin-image';
import { z } from 'zod';


export const socialSchema = z.object({
    icon: z.any() as z.ZodType<IGatsbyImageData>,
    link: z.string(),
    title: z.string(),
});


export function socialsTransform(nodes: readonly DeepPartial<GatsbyTypes.PrismicSocials>[]) {
    return socialSchema.array().parse(nodes.map(({ data } ) => ({
        title: data?.title,
        link: data?.link?.url,
        icon: data?.icon?.gatsbyImageData,
    })));
}


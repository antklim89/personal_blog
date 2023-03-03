import { IGatsbyImageData } from 'gatsby-plugin-image';


const socialTransform = ({ data }: DeepRequired<GatsbyTypes.SocialButtonsQuery['allPrismicSocials']['nodes'][number]>) => ({
    title: data?.title,
    link: data?.link?.url,
    icon: data?.icon?.gatsbyImageData as unknown as IGatsbyImageData,
});

export function socialsTransform(data: DeepRequired<GatsbyTypes.SocialButtonsQuery>) {
    return data.allPrismicSocials.nodes.map(socialTransform);
}


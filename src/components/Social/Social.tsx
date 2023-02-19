import { Box, IconButton } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';

import { DeepRequired } from '~/types';


const Social: FC = () => {
    const { allPrismicSocials: { nodes } } = useStaticQuery<DeepRequired<GatsbyTypes.SocialButtonsQuery>>(graphql`
        query SocialButtons {
            allPrismicSocials {
              nodes {
                data {
                    icon {
                        gatsbyImageData
                    }
                    link {
                        url
                    }
                    title
                }
              }
            }
}
    `);

    return (
        <nav>
            <Box
                as="ul" 
                display="flex" 
                listStyleType="none"
                my={2}
            >
                {nodes.map(({ data }) => (
                    <Box as="li" key={data.link.url} mx={1}>
                        <IconButton
                            aria-label="vkontakte"
                            as="a"
                            borderRadius={0}
                            href={data.link.url}
                            size="sm"
                            target="_blank"
                            variant="solid"
                        >
                            <GatsbyImage
                                alt={data.title}
                                image={data.icon.gatsbyImageData as unknown as IGatsbyImageData}
                            />
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </nav>
    );
};

export default Social;


import { Box, BoxProps, IconButton } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC, useMemo } from 'react';

import { socialsTransform } from '~/transforms';


const Social: FC<BoxProps> = (props) => {
    const data = useStaticQuery<DeepRequired<GatsbyTypes.SocialButtonsQuery>>(graphql`
        query SocialButtons {
            allPrismicSocials {
              nodes {
                data {
                    icon {
                        gatsbyImageData(width: 32, height: 32)
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

    const socials = useMemo(() => socialsTransform(data), []);

    return (
        <nav>
            <Box
                as="ul"
                {...props}
                display="flex"
                listStyleType="none"
                minHeight="32px"
                minWidth="32px"
                my={2}
            >
                {socials.map(({ icon, link, title }) => (
                    <Box as="li" key={link} m={1}>
                        <IconButton
                            isRound
                            aria-label={title}
                            as="a"
                            bgColor="gray.900"
                            href={link}
                            overflow="hidden"
                            p={1}
                            size="sm"
                            target="_blank"
                        >
                            <GatsbyImage
                                alt={title}
                                image={icon}
                            />
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </nav>
    );
};

export default Social;


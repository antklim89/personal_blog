import { Box, IconButton, Image } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { SocialQuery } from './types';


const Social: FC = () => {
    const { social: { icons } } = useStaticQuery<SocialQuery>(graphql`
        query SocialIcons{
            social: socialJson {
                icons: social {
                    name
                    link
                    icon {
                        childImageSharp {
                            gatsbyImageData(width: 24, height: 24)
                        }
                        publicURL
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
                {icons.map((item) => (
                    <Box as="li" key={item.link} mx={1}>
                        <IconButton
                            aria-label="vkontakte"
                            as="a"
                            href={item.link}
                            size="sm"
                            target="_blank"
                            variant="solid"
                        >
                            {item.icon.childImageSharp
                                ? (
                                    <GatsbyImage 
                                        alt={item.name} 
                                        image={item.icon.childImageSharp.gatsbyImageData}
                                    />
                                )
                                : (
                                    <Image
                                        alt={item.name}
                                        h="24px"
                                        src={item.icon.publicURL}
                                        w="24px"
                                    />
                                )}
                            
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </nav>
    );
};

export default Social;


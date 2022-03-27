import { Box, IconButton } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { SocialProps } from './Social.types';


const Social: FC<SocialProps> = () => {
    const { social: { icons } } = useStaticQuery(graphql`
    query SocialIcons{
      social: socialJson {
        icons: social {
          name
          link
          icon {
            childImageSharp {
              gatsbyImageData(width: 24, height: 24)
            }
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
                            colorScheme="primary"
                            href={item.link}
                            size="sm"
                            target="_blank"
                        >
                            <GatsbyImage alt={item.name} image={item.icon.childImageSharp.gatsbyImageData} />
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </nav>
    );
};

export default Social;


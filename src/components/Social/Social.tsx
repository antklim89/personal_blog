import { Box, IconButton, Image } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { FC } from 'react';

import { SocialQuery } from './types';


const Social: FC = () => {
    const { allGraphCmsSocialButton: { nodes: icons } } = useStaticQuery<SocialQuery>(graphql`
        query SocialButtons {
            allGraphCmsSocialButton {
                nodes {
                    name
                    link
                    icon {
                        url
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
                            <Image
                                alt={item.name}
                                h="24px"
                                src={item.icon.url}
                                w="24px"
                            />
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </nav>
    );
};

export default Social;


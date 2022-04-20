import { Box, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC, useEffect } from 'react';

import { PostProps } from './types';

import SocialShare from '~/components/SocialShare';


const Post: FC<PostProps> = ({ body, title, imagePreview, createdAt }) => {
    useEffect(() => {
        const bodyEl = document.querySelector('body');
        if (bodyEl) bodyEl.scrollTop = 0;
    }, []);

    return (
        <Box as="article" mb={10}>
            <Box
                left={0}
                mb={4}
                position="absolute"
                right={0}
                sx={{ '& *': { width: '100%', height: 270 } }}
                top={0}
            >
                <GatsbyImage
                    alt="post prewiew image"
                    image={imagePreview.gatsbyImageData}
                />
            </Box>
            <Heading as="h1" marginTop={270}>
                {title}
            </Heading>
            <SocialShare
                image={imagePreview.url}
                title={title}
            />
            <Text mb={4}>{createdAt}</Text>
            <Box dangerouslySetInnerHTML={{ __html: body.html }} />
        </Box>
    );
};

export default Post;


import { Box, Container, Heading, Text } from '@chakra-ui/react';
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
        <article>
            <Box
                marginTop="calc(var(--header-height) * -1)"
                mb={4}
                sx={{ '*': { width: '100%' } }}
                width="100%"
            >
                <GatsbyImage
                    alt="post prewiew image"
                    image={imagePreview.gatsbyImageData}
                />
            </Box>
            <Container as="article" mb={10}>
                <Heading as="h1">
                    {title}
                </Heading>
                <SocialShare
                    image={imagePreview.url}
                    title={title}
                />
                <Text mb={4}>{createdAt}</Text>
                <Box dangerouslySetInnerHTML={{ __html: body.html }} sx={{ 'li': { ml: 4 } }} />
            </Container>
        </article>
    );
};

export default Post;


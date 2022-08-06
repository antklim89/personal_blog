import { ArrowBackIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC, useCallback, useEffect } from 'react';

import { PostProps } from './types';

import SocialShare from '~/components/SocialShare';


const Post: FC<PostProps> = ({ body, title, imagePreview, createdAt }) => {
    const goBack = useCallback(() => history.back(), []);
    const goTop = useCallback(() => { document.body.scrollTop = 0; }, []);
    useEffect(goTop, []);

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
                <Button colorScheme="primary" marginTop="-58px" onClick={goBack}>
                    <ArrowBackIcon />&ensp;BACK
                </Button>
                <Heading as="h1">
                    {title}
                </Heading>
                <SocialShare
                    image={imagePreview.url}
                    title={title}
                />
                <Text mb={4}>{createdAt}</Text>
                <Box dangerouslySetInnerHTML={{ __html: body.html }} sx={{ 'li': { ml: 4 } }} />
                <Box display="flex" justifyContent="center">
                    <Button colorScheme="primary" px={8} onClick={goTop}>
                        <ChevronUpIcon />
                    </Button>
                </Box>
            </Container>
        </article>
    );
};

export default Post;


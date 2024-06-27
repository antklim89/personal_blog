import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC, useCallback } from 'react';

import { PostProps } from './types';

import { FromNow, GoTopButton, SocialShare } from '~/components';


const Post: FC<PostProps> = ({ body, title, imagePreview, createdAt }) => {
    const goBack = useCallback(() => history.back(), []);

    return (
        <article>
            <Container p={0} sx={{ '*': { width: '100%' }, 'img': { bgColor: 'white' } }}>
                <GatsbyImage alt="post prewiew image" image={imagePreview.gatsbyImageData} />
            </Container>
            <Container
                alignItems="flex-start"
                as="article"
                display="flex"
                flexDirection="column"
                my={8}
                position="relative"
                sx={{ 'img': { bgColor: 'white' } }}
            >
                <Button
                    colorScheme="primary"
                    position="absolute"
                    size="xs"
                    top="-4rem"
                    onClick={goBack}
                >
                    <ArrowBackIcon />&ensp;BACK
                </Button>
                <Heading as="h1">
                    {title}
                </Heading>
                <SocialShare
                    image={imagePreview.url}
                    title={title}
                />
                <FromNow date={createdAt} mb={4} />
                <Box dangerouslySetInnerHTML={{ __html: body }} sx={{ 'li': { ml: 4 } }} />
                <GoTopButton />
            </Container>
        </article>
    );
};

export default Post;


import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Container, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC, useCallback } from 'react';

import { PostProps } from './types';

import FromNow from '~/components/FromNow';
import { GoTopButton } from '~/components/GoTopButton';
import SocialShare from '~/components/SocialShare';


const Post: FC<PostProps> = ({ body, title, imagePreview, createdAt }) => {
    const goBack = useCallback(() => history.back(), []);

    return (
        <article>
            <Container p={0} sx={{ '*': { width: '100%' } }}>
                <GatsbyImage alt="post prewiew image" image={imagePreview.gatsbyImageData} />
            </Container>
            <Container
                alignItems="flex-start"
                as="article"
                display="flex"
                flexDirection="column"
                my={8}
                position="relative"
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
                <Text dangerouslySetInnerHTML={{ __html: body }} sx={{ 'li': { ml: 4 } }} />
                <GoTopButton />
            </Container>
        </article>
    );
};

export default Post;


import { Box, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { PostProps } from './types';

import SocialShare from '~/components/SocialShare';


const Post: FC<PostProps> = ({ body, title, imagePreview, createdAt }) => {
    return (
        <Box as="article" mb={10}>
            <Box mb={4}>
                <GatsbyImage
                    alt="post prewiew image"
                    image={imagePreview.gatsbyImageData}
                />
            </Box>
            <Heading as="h1">
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


import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { PostProps } from './types';


const Post: FC<PostProps> = ({ body, frontmatter }) => {
    return (
        <Box as="article" my={10}>
            <Heading as="h1">
                {frontmatter.title}
            </Heading>
            <Text mb={4}>{frontmatter.createdAt}</Text>
            <Box dangerouslySetInnerHTML={{ __html: body }} />
        </Box>
    );
};

export default Post;


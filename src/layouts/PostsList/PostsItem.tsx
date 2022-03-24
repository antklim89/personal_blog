import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import { Post } from '~/types';


const PostsItem: FC<Post> = ({ id, frontmatter, body }) => {
    return (
        <Box as="article">
            <Heading as="h3" mb={4}>
                {frontmatter.title}
            </Heading>
            <Text>xx{frontmatter.createdAt}</Text>
            <Box dangerouslySetInnerHTML={{ __html: body }} mb={4} />
            <Button
                as={Link}
                colorScheme="primary"
                to={`/posts/${id}`}
                variant="outline"
            >
                Read more...
            </Button>
        </Box>
    );
};

export default PostsItem;

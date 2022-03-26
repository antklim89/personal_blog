import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import { IPost } from '~/types';


const PostsItem: FC<IPost> = ({ id, frontmatter, body }) => {
    return (
        <Box as="article">
            <Heading as="h3">
                {frontmatter.title}
            </Heading>
            <Text mb={4}>{frontmatter.createdAt}</Text>
            <Box dangerouslySetInnerHTML={{ __html: body }} mb={4} />
            <Button
                as={Link}
                colorScheme="primary"
                to={`/posts/${id}`}
                variant="outline"
            >
                Read more...
            </Button>
            <Divider mb={10} mt={4} />
        </Box>
    );
};

export default PostsItem;

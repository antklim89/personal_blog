import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { IPost } from '~/types';


const PostsItem: FC<IPost> = ({ id, title, imagePreview, createdAt, bodyPreview }) => {
    return (
        <Box as="article">
            <Box mb={4}>
                <GatsbyImage
                    alt="post prewiew image"
                    image={imagePreview.gatsbyImageData}
                />
            </Box>
            <Heading as="h3">
                {title}
            </Heading>
            <Text mb={4}>{createdAt}</Text>
            <Text>
                {bodyPreview}
            </Text>
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

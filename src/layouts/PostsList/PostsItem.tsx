import { Box, Button, Divider, Heading } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import FromNow from '~/components/FromNow';
import { IPostPreview } from '~/types';


const PostsItem: FC<IPostPreview> = ({ id, title, imagePreview, createdAt, bodyPreview }) => {
    return (
        <Box as="article" sx={{ 'img': { bgColor: 'white' } }}>
            <Box mb={4}>
                <GatsbyImage
                    alt="post prewiew image"
                    image={imagePreview.gatsbyImageData}
                />
            </Box>
            <Heading as="h3">
                {title}
            </Heading>
            <FromNow date={createdAt} mb={4} />
            <Box dangerouslySetInnerHTML={{ __html: bodyPreview }} my={4} />
            <Button
                as={Link}
                colorScheme="primary"
                marginLeft="auto"
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

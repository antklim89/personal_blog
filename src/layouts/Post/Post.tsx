import { Box, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { PostProps } from './types';

import SocialShare from '~/components/SocialShare';


const Post: FC<PostProps> = ({ body, frontmatter }) => {
    return (
        <Box as="article" mb={10}>
            <Box mb={4}>
                <GatsbyImage
                    alt="post prewiew image"
                    image={frontmatter.imagePreview.childImageSharp.gatsbyImageData}
                />
            </Box>
            <Heading as="h1">
                {frontmatter.title}
            </Heading>
            <SocialShare
                image={frontmatter.imagePreview.childImageSharp.resize.src}
                title={frontmatter.title}
            />
            <Text mb={4}>{frontmatter.createdAt}</Text>
            <Box dangerouslySetInnerHTML={{ __html: body }} />
        </Box>
    );
};

export default Post;


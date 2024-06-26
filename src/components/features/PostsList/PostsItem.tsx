import {
    Box, Button, useColorModeValue , Flex, Image, Link, 
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { FromNow } from '~/components';
import { type IPostPreview } from '~/types';


const PostsItem: FC<IPostPreview> = ({ id, title, imagePreview, createdAt, bodyPreview }) => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <Box
            alignItems="center"
            as="article"
            bg={bgColor}
            justifyContent="center"
            my={8}
            rounded="lg"
            shadow="md"
            w="full"
        >
            <Image
                alt="Article photo"
                as={GatsbyImage}
                fit="cover"
                h={64}
                image={imagePreview.gatsbyImageData}
                roundedTop="lg"
                w="full"
            />
            <Box p={8}>
                <h2>
                    <Link
                        as={GatsbyLink}
                        display="block"
                        fontSize="4xl"
                        fontWeight="bold"
                        to={`/posts/${id}`}
                    >
                        {title}
                    </Link>
                </h2>
            
                <FromNow date={createdAt} mb={4} />

                <Box dangerouslySetInnerHTML={{ __html: bodyPreview }} my={4} />

                <Flex>
                    <Button
                        as={GatsbyLink}
                        colorScheme="primary"
                        marginLeft="auto"
                        to={`/posts/${id}`}
                        variant="outline"
                    >
                        Read more...
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
};

export default PostsItem;

import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { Flex, Image, Link } from '@chakra-ui/react';
import { type IPostPreview } from '~/types';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import FromNow from '~/components/ui/FromNow';


const PostsItem: FC<IPostPreview> = ({ id, title, imagePreview, createdAt, bodyPreview }) => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <Flex
            w="full"
            alignItems="center"
            justifyContent="center"
            bg={bgColor}
            m={8}
        >
            <Box
                mx="auto"
                rounded="lg"
                shadow="md"
            >
                <Image
                    as={GatsbyImage}
                    roundedTop="lg"
                    w="full"
                    h={64}
                    fit="cover"
                    image={imagePreview.gatsbyImageData}
                    alt="Article photo"
                />
                <Box p={8}>
                    <Box>
                        <h2>
                            <Link
                                as={GatsbyLink}
                                to={`/posts/${id}`}
                                display="block"
                                fontWeight="bold"
                                fontSize="4xl"
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
            </Box>
      </Flex>
    );
};

export default PostsItem;

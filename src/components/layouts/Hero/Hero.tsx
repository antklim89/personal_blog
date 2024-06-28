import { Box, Button, HStack, Image, Icon } from '@chakra-ui/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';

import { Social } from '~/components';


const Hero: FC = () => {
    const { prismicSiteInfo: { data: { image, text } } } = useStaticQuery<DeepRequired<GatsbyTypes.HeroQuery>>(graphql`
        query Hero {
            prismicSiteInfo {
                data {
                    text: hero_text {
                        html
                    }
                    image: hero_image {
                        gatsbyImageData(height: 400)
                    }
                }
            }
        }
    `);
    

    return (
        <Box
            as="section" bg="gray.700" overflow="hidden"
            pos="relative"
        >
            <Box maxW="7xl" mx="auto">
                <Box
                    bg="gray.700"
                    border="solid 1px transparent"
                    maxW={{ lg: '2xl' }}
                    pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                    pos="relative"
                    w={{ lg: 'full' }}
                    zIndex={1}
                >
                    <Icon
                        aria-hidden="true"
                        bottom={0}
                        color="gray.700"
                        display={{ base: 'none', lg: 'block' }}
                        fill="currentColor"
                        h="full"
                        position="absolute"
                        preserveAspectRatio="none"
                        right={0}
                        top={0}
                        transform="translateX(50%)"
                        viewBox="0 0 100 100"
                        w={48}
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </Icon>
                    <Box
                        maxW={{ base: '7xl' }}
                        mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
                        mx="auto"
                        px={{ base: 4, sm: 6, lg: 8 }}
                    >
                        <Box
                            alignItems="center"
                            justifyContent="center"
                            textAlign={{ sm: 'center', lg: 'left' }}
                            w="full"
                        >
                            <Box
                                dangerouslySetInnerHTML={{ __html: text.html }}
                                sx={{
                                    '& > *': { color: 'white' },
                                    'ul': { pl: 4 },
                                    'h1': { fontSize: '5xl' },
                                }}
                            />
                        </Box>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Social />
                            <Button
                                _hover={{ color: 'black', bg: 'white' }}
                                as={Link}
                                color="white"
                                size="lg"
                                to="/posts"
                                variant="outline"
                            >
                                Show All Posts
                            </Button>
                        </HStack>
                    </Box>
                </Box>
            </Box>
            <Box
                border="solid 1px transparent"
                bottom={{ lg: 0 }}
                position={{ lg: 'absolute' }}
                right={{ lg: 0 }}
                top={{ lg: 0 }}
                w={{ lg: '50%' }}
            >
                <Image
                    alt="Hero image."
                    as={GatsbyImage}
                    fit="cover"
                    h={[56, 72, 96, 'full']}
                    image={image.gatsbyImageData as unknown as IGatsbyImageData}
                    loading="lazy"
                    w="full"
                />
            </Box>
        </Box>
    );
};

export default Hero;

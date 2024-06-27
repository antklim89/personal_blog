import { Box, Button, HStack, Image, Icon, DarkMode } from '@chakra-ui/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';
import Social from '~/components/ui/Social';


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
        <DarkMode>
            <Box as="section" pos="relative" overflow="hidden" bg="gray.700">
                <Box maxW="7xl" mx="auto">
                    <Box
                        pos="relative"
                        pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                        maxW={{ lg: "2xl" }}
                        w={{ lg: "full" }}
                        zIndex={1}
                        bg="gray.700"
                        border="solid 1px transparent"
                    >
                    <Icon
                        display={{ base: "none", lg: "block" }}
                        position="absolute"
                        right={0}
                        top={0}
                        bottom={0}
                        h="full"
                        w={48}
                        color="gray.700"
                        transform="translateX(50%)"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </Icon>
                    <Box
                        mx="auto"
                        maxW={{base: "7xl"}}
                        px={{ base: 4, sm: 6, lg: 8 }}
                        mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
                    >
                        <Box
                        w="full"
                        textAlign={{ sm: "center", lg: "left" }}
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Box
                                dangerouslySetInnerHTML={{ __html: text.html }}
                                sx={{
                                    '& > *': { color: 'white' },
                                    'ul': { pl: 4 },
                                    'h1': { fontSize: '5xl' },
                                }}
                            />
                            <HStack justifyContent="space-between" alignItems="center">
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
                </Box>
                <Box
                    position={{ lg: "absolute" }}
                    top={{ lg: 0 }}
                    bottom={{ lg: 0 }}
                    right={{ lg: 0 }}
                    w={{ lg: "50%" }}
                    border="solid 1px transparent"
                >
                    <Image
                        h={[56, 72, 96, "full"]}
                        w="full"
                        fit="cover"
                        alt="Hero image."
                        loading="lazy"
                        as={GatsbyImage}
                        image={image.gatsbyImageData as unknown as IGatsbyImageData}
                    />
                </Box>
            </Box>
        </DarkMode>
      );
};

export default Hero;

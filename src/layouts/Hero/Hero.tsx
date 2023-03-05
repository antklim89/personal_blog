import {
    Box, Button, Container, VStack, Text, HStack, Image, 
} from '@chakra-ui/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';

import Social from '~/components/Social';


const Hero: FC = () => {
    const { prismicHero: { data: { image, text } } } = useStaticQuery<DeepRequired<GatsbyTypes.HeroQuery>>(graphql`
    query Hero {
        prismicHero {
            data {
                text {
                    html
                }
                image {
                    gatsbyImageData(height: 400)
                }
            }
        }
    }
  `);

    return (
        <Box
            display="flex"
            minHeight={400}
            position="relative"
            py={8}
            width="100%"
        >
            <Container
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <HStack gap={4}>
                    <VStack alignItems="flex-start" justifyContent="center">
                        <Text dangerouslySetInnerHTML={{ __html: text.html }} sx={{ '& > *': { color:'primary.textLight' } }} />
                    </VStack>
                    <Social flexDirection="column" />
                </HStack>
                <Button
                    _hover={{ color: 'black', bg: 'white' }} 
                    alignSelf="flex-end"
                    as={Link}
                    color="white"
                    size="lg"
                    to="/posts"
                    variant="outline"
                > 
                    Read More
                </Button>
            </Container>
            <Image
                alt="hero"
                as={GatsbyImage}
                image={image.gatsbyImageData as unknown as IGatsbyImageData}
                inset={0}
                position="absolute"
                zIndex={-1}
            />
        </Box>
    );
};

export default Hero;


import { Box, Container } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


const Hero: FC = () => {
    const { custom: { headerHeight } } = useTheme() as { custom: {headerHeight: number } };
    const { hero } = useStaticQuery(graphql`
        query Hero{
            hero: markdownRemark(fileAbsolutePath: {regex: "/hero.md$/"}) {
                frontmatter {
                    background {
                        childImageSharp {
                            resize(toFormat: WEBP, quality: 90, fit: COVER, height: 470) {
                                src
                            }
                        }
                    }
                    portrait {
                        childImageSharp {
                            gatsbyImageData(width: 270, height: 380, placeholder: BLURRED)
                        }
                    }
                }
                excerpt(format: HTML, pruneLength: 10000)
            }
        }
    `);

    return (
        <Box 
            bgImage={`URL(${hero.frontmatter.background.childImageSharp.resize.src})`} 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            display="flex"
            marginTop={`-${headerHeight}`}
            width="100%"
        >
            <Container
                display="grid"
                gridTemplateColumns={['1fr', null, '1fr 1fr']}
                marginTop={headerHeight}
                maxWidth="container.lg"
            >
                <Box 
                    color="white"
                    dangerouslySetInnerHTML={{ __html: hero.excerpt }}
                    p={4}
                />
                <Box p={4}>
                    <GatsbyImage
                        alt="hero"
                        image={hero.frontmatter.portrait.childImageSharp.gatsbyImageData}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;


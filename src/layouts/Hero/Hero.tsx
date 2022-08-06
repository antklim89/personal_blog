import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import background from './background.webp';


const Hero: FC = () => {
    return (
        <Box
            bgImage={`URL(${background})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            display="flex"
            marginTop="calc(var(--header-height) * -1)"
            pb={12}
            width="100%"
        >
            <Container
                display="grid"
                gridTemplateColumns={['1fr', null, '1fr 1fr']}
                marginTop="var(--header-height)"
            >
                <Box
                    py={4}
                    sx={{ '*': { color: 'white' }, 'h1': { fontSize: '4rem', mb: 10 }, 'p': { lineHeight: 1.7 } }}
                >
                    <Heading as="h1">Hello my name is John</Heading>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Adipisci nobis cupiditate sunt ex quisquam voluptate, id
                        emo hic aspernatur dolorem esse veritatis molestiae magni!
                    </Text>
                    <Text>
                        Enim accusamus omnis nesciunt tempore distinctio.
                    </Text>
                </Box>
                <Box ml={10} p={4} sx={{ '.hero-portrait': { shadow: '0 0 20px 0 white' }, '& *': { borderRadius: '5%' } }}>
                    <StaticImage
                        alt="hero"
                        className='hero-portrait'
                        height={380}
                        placeholder="blurred"
                        src='./portrait.webp'
                        width={270}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;


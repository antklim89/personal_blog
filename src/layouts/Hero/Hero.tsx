import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import background from './background.webp';


const Hero: FC = () => {
    return (
        <Box
            background={`linear-gradient(356deg, white 22%, transparent 22%), URL(${background})`}
            backgroundSize="auto auto, cover"
            display="flex"
            marginTop="calc(var(--header-height) * -1)"
            py={[4, 4, 12]}
            width="100%"
        >
            <Container
                display="flex"
                flexDirection={['column', 'row']}
                marginTop="var(--header-height)"
            >
                <Box flex="2 1 200px">
                    <Heading as="h1" color="primary.textLight">Hello my name is John</Heading>
                    <Text color="primary.textLight">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Adipisci nobis cupiditate sunt ex quisquam voluptate, id
                        emo hic aspernatur dolorem esse veritatis molestiae magni!
                    </Text>
                    <Text color="primary.textLight">
                        Enim accusamus omnis nesciunt tempore distinctio.
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flex="1 1 200px"
                    justifyContent="center"
                    ml={[0, 10]}
                    sx={{ '.hero-portrait': { shadow: '0 0 20px 0 white' }, '& *': { borderRadius: '5%' } }}
                >
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


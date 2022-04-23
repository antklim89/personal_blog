import { Box, Container } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import background from './background.webp';


const Hero: FC = () => {
    const { custom: { headerHeight } } = useTheme() as { custom: {headerHeight: number } };

    return (
        <Box 
            bgImage={`URL(${background})`} 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            display="flex"
            marginTop={`-${headerHeight}`}
            pb={12}
            width="100%"
        >
            <Container
                display="grid"
                gridTemplateColumns={['1fr', null, '1fr 1fr']}
                marginTop={headerHeight}
                maxWidth="container.lg"
            >
                <Box 
                    p={4}
                    sx={{ '*': { color: 'white', lineHeight: 1.7 }, 'h1': { fontSize: '4rem' } }}
                >
                    <h1>Hello</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Adipisci nobis cupiditate sunt ex quisquam voluptate, id 
                        emo hic aspernatur dolorem esse veritatis molestiae magni! 
                        Enim accusamus omnis nesciunt tempore distinctio.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Adipisci nobis cupiditate sunt ex quisquam voluptate, id 
                        emo hic aspernatur dolorem esse veritatis molestiae magni! 
                        Enim accusamus omnis nesciunt tempore distinctio.
                    </p>                
                </Box>
                <Box p={4} sx={{ '.hero-portrait': { shadow: '0 0 20px 0 white' }, '& *': { borderRadius: '5%' } }}>
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


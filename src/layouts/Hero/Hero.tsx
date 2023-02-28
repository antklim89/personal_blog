import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import background from './background.webp';


const Hero: FC = () => {
    return (
        <Box
            background={`linear-gradient(358deg, white 22%, transparent 22%), URL(${background})`}
            backgroundSize="auto auto, cover"
            display="flex"
            // marginTop="calc(var(--header-height) * -1)"
            minHeight={500}
            width="100%"
        >
            <Container
                alignItems="flex-start"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Heading as="h1" color="primary.textLight">Hello my name is John</Heading>
                <Text color="primary.textLight">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci nobis cupiditate sunt ex quisquam voluptate, id
                    emo hic aspernatur dolorem esse veritatis molestiae magni!
                </Text>
                <Text color="primary.textLight">
                    Enim accusamus omnis nesciunt tempore distinctio.
                </Text>
                <Button
                    alignSelf="flex-end" 
                    as={Link} 
                    className='left-line'
                    color="white"
                    size="lg"
                    to="/posts"
                    variant="link"
                > 
                    Read
                </Button>
            </Container>
        </Box>
    );
};

export default Hero;


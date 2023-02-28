import {
    Box, Button, Container, Heading, VStack, Text, HStack, 
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import background from './background.webp';

import Social from '~/components/Social';


const Hero: FC = () => {
    return (
        <Box
            background={`URL(${background})`}
            backgroundSize="cover"
            bgRepeat="no-repeat"
            border="1px"
            display="flex"
            minHeight={400}
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
                        <Heading as="h1" color="primary.textLight">Hello my name is John</Heading>
                        <Text color="primary.textLight">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Adipisci nobis cupiditate sunt ex quisquam voluptate, id
                            emo hic aspernatur dolorem esse veritatis molestiae magni!
                        </Text>
                        <Text color="primary.textLight">
                            Enim accusamus omnis nesciunt tempore distinctio.
                        </Text>
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
        </Box>
    );
};

export default Hero;


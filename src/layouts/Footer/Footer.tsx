import { Box, Container, HStack } from '@chakra-ui/react';
import { FC } from 'react';

import Social from '~/components/Social';


const Footer: FC = () => {
    return (
        <Box as="footer" bgColor="black" color="white">
            <Container maxWidth='container.lg'>
                <HStack justifyContent="space-between">
                    <span>&copy; {new Date().getFullYear()} Personal Blog</span>
                    <Social />
                </HStack>
            </Container>
        </Box>
    );
};

export default Footer;


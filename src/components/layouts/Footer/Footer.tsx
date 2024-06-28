import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Social } from '~/components';


const Footer: FC = () => {
    return (
        <Box
            bg="gray.700"
            color="gray.50"
        >
            <Container
                align={{ base: 'center', md: 'center' }}
                as={Stack}
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center', md: 'space-between' }}
                maxW="6xl"
                py={4}
                spacing={4}
            >
                <Text>© 2024 Personal Blog. All rights reserved</Text>
                <Social fontSize="sm" />
            </Container>
        </Box>
    );
};

export default Footer;

import { Box, Container } from '@chakra-ui/react';
import { FC } from 'react';


const Footer: FC = () => {
    return (
        <Box as="footer" bgColor="black" color="white">
            <Container maxWidth='container.lg'>
                Footer
            </Container>
        </Box>
    );
};

export default Footer;


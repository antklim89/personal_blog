import { Container, HStack } from '@chakra-ui/react';
import { FC } from 'react';

import HeaderLinks from './HeaderLinks';


const Header: FC = () => {
    return (
        <HStack
            as="header"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
            position="absolute"
            py={[1, 4]}
            width="100%"
            zIndex={100}
        >
            <Container>
                <HeaderLinks />
            </Container>
        </HStack>
    );
};

export default Header;



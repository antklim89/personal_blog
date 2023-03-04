import { Container, HStack } from '@chakra-ui/react';
import { FC } from 'react';

import HeaderLinks from './HeaderLinks';


const Header: FC = () => {
    return (
        <HStack
            as="header"
            position="fixed"
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



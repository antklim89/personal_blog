import { HStack } from '@chakra-ui/react';
import { FC } from 'react';

import HeaderDrawer from './HeaderDrawer';


const Header: FC = () => {
    return (
        <HStack
            as="header"
            backdropFilter="blur(5px)"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
            justifyContent="flex-end"
            px={32}
            py={4}
            zIndex={100}
        >
            <HeaderDrawer />
        </HStack>
    );
};

export default Header;



import { HStack } from '@chakra-ui/react';
import { FC } from 'react';

import HeaderDrawer from './HeaderDrawer';


const Header: FC = () => {
    return (
        <HStack
            alignItems="center"
            as="header"
            backdropFilter="blur(2px)"
            background="rgba(0, 0, 0, 0.4)"
            justifyContent="flex-end"
            px={4}
            zIndex={100}
        >
            <HeaderDrawer />
        </HStack>
    );
};

export default Header;



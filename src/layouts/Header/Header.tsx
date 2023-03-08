import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, Container, HStack, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

import HeaderLinks from './HeaderLinks';


const Header: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack
            as="header"
            position="fixed"
            width="100%"
            zIndex={100}
        >
            <Container display="flex" justifyContent="flex-end">
                <HeaderLinks />
                <IconButton
                    aria-label="switch color mode" variant="solid"
                    onClick={toggleColorMode}
                >
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </IconButton>
            </Container>
        </HStack>
    );
};

export default Header;



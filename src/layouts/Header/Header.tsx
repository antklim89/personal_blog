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
                    aria-label="switch color mode"
                    bgColor="rgba(0,0,0,0.3)"
                    color="white"
                    colorScheme="primary"
                    mx={8}
                    variant="ghost"
                    onClick={toggleColorMode}
                >
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </IconButton>
            </Container>
        </HStack>
    );
};

export default Header;



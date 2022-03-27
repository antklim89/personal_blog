import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Button, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useMediaQuery,  useDisclosure,
} from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { FC, useRef } from 'react';

import HeaderLinks from './HeaderLinks';

import Social from '~/components/Social';


const HeaderDrawer: FC = () => {
    const { isOpen, onClose, onToggle } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    const { breakpoints } = useTheme() as {breakpoints: {md: string}};
    const [isLargerThenMd] = useMediaQuery(`(min-width: ${breakpoints.md})`);
    const { custom: { headerHeight } } = useTheme() as { custom: {headerHeight: number } };

    if (isLargerThenMd) return (
        <>
            <Stack as="ul" direction="row" listStyleType="none">
                <HeaderLinks />
            </Stack>
            <Stack as="ul" direction="row" listStyleType="none">
                <Social />
            </Stack>
        </>
    );
    return (
        <>
            <Button 
                color="white" 
                ref={btnRef}
                variant="link"
                onClick={onToggle}
            >
                <HamburgerIcon />
            </Button>
            <Drawer
                finalFocusRef={btnRef}
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay onClick={onClose} />
                <DrawerContent>
                    <DrawerBody sx={{ 'a': { color: 'primary.text' } }}>
                        <Stack
                            as="ul" 
                            direction="column" 
                            listStyleType="none"
                            mt={headerHeight}
                        >
                            <HeaderLinks />
                        </Stack>
                        <Social />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HeaderDrawer;

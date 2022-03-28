import { Stack, Box, Container } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { FC } from 'react';

import HeaderDrawer from './HeaderDrawer';


const Header: FC = () => {
    const { custom: { headerHeight } } = useTheme() as { custom: {headerHeight: number } };
    return (
        <>
            <Box
                as="header"
                background="linear-gradient(black, transparent)"
                flexShrink={0}
                position="fixed"
                width="100%"
                zIndex={100}
            >
                <Container maxW='container.lg'>
                    <Stack
                        alignItems="center"
                        direction="row"
                        justifyContent="flex-end"
                    >
                        <HeaderDrawer />
                    </Stack>
                </Container>
            </Box>
            <Box mb={headerHeight} />
        </>
    );
};

export default Header;



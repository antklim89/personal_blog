import { Stack, Box } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { FC } from 'react';

import HeaderDrawer from './HeaderDrawer';


const Header: FC = () => {
    const { custom: { headerHeight } } = useTheme() as { custom: {headerHeight: number } };
    return (
        <>
            <Box
                as="header"
                backdropFilter="blur(2px)"
                background="rgba(0, 0, 0, 0.4)"
                flexShrink={0}
                position="fixed"
                right={0}
                zIndex={100}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="flex-end"
                >
                    <HeaderDrawer />
                </Stack>
            </Box>
            <Box mb={headerHeight} />
        </>
    );
};

export default Header;



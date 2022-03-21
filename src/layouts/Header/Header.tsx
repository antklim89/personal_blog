import { Stack, Box, Container, Text, Spacer } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import HeaderDrawer from './HeaderDrawer';


const Header: FC = () => {
    const { custom: { headerHeight } } = useTheme() as { custom: {headerHeight: number } };
    return (
        <>
            <Box as="header" flexShrink={0} sx={{ bg: 'linear-gradient(black, transparent)', pos: 'fixed', width: '100%', zIndex: 100 }}>
                <Container maxW='container.lg'>
                    <Stack
                        alignItems="center"
                        direction="row"
                        height={16}
                        spacing='24px'
                    >
                        <Text
                            alignItems="center"
                            as={Link}
                            color="primary.textLight"
                            display="flex"
                            fontSize="x-large"
                            fontWeight="bold" to="/"
                        >
                            <Box ml={[1, 2, 6]}>PERSONAL&nbsp;BLOG</Box>
                        </Text>
                        <Spacer />
                        <HeaderDrawer />
                    </Stack>
                </Container>
            </Box>
            <Box mb={headerHeight} />
        </>
    );
};

export default Header;



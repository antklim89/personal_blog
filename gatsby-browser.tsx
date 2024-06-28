import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { GatsbyBrowser } from 'gatsby';
import React from 'react';

import './src/styles/globals.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';

import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import { Layout } from './src/components';
import theme from './src/theme';


export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
    return (
        <AnimatePresence initial={false} mode="wait">
            <ChakraProvider resetCSS theme={theme}>
                <Layout>
                    {element}
                </Layout>
            </ChakraProvider>
        </AnimatePresence>
    );
};

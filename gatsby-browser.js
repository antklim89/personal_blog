/* eslint-disable react/jsx-filename-extension */
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import './src/styles/globals.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';

import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import Layout from './src/layouts/Layout';
import theme from './src/theme';


/**
 * 
 * @param {import('gatsby').WrapPageElementBrowserArgs}
 */
export const wrapPageElement = ({ element }) => {
    return (
        <AnimatePresence initial={false} mode='wait'>
            <ChakraProvider resetCSS theme={theme}>
                <Layout>
                    {element}
                </Layout>
            </ChakraProvider>
        </AnimatePresence>
    );
};

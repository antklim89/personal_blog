import { extendTheme, type ThemeConfig, type ThemeOverride } from '@chakra-ui/react';


const config: ThemeOverride & ThemeConfig = {
    config: {
        initialColorMode: 'system',
        useSystemColorMode: false,
    },
    colors: {
        white: '#FDFDFD',
        black: '#010101',
        primary: {
            '50': '#F4F4F0',
            '100': '#E0DFD6',
            '200': '#CCCBBC',
            '300': '#B9B6A2',
            '400': '#A5A288',
            '500': '#918D6E',
            '600': '#747158',
            '700': '#575542',
            '800': '#3A382C',
            '900': '#1D1C16',
        },
    },
    styles: {
        global: ({ colorMode, theme }) => ({
            'h1': { fontSize: '3xl', mb: 2, fontWeight: 'bold', lineHeight: 0.9 },
            'h2': { fontSize: '2xl', mb: 2, fontWeight: 'bold', lineHeight: 0.9 },
            'h3': { fontSize: '1xl', mb: 2, lineHeight: 0.9 },
            'h4': { fontSize: 'xl', mb: 2 },
            'h5': { fontSize: 'lg', mb: 2 },
            'h6': { fontSize: 'md', mb: 2 },
            'p': { overflowWrap: 'break-word', pb: 6, lineHeight: 1.5 },
            '::placeholder': { color: colorMode === 'light' ? theme.colors.dark : theme.colors.white },
        }),
    },
    components: {
        Button: {
            baseStyle: {
                cursor: 'pointer',
                borderTop: 'none',
                borderRadius: 0,
                display: 'flex',
                alignItems: 'center',
                width: 'min-content',
                lineHeight: 0,
            },
            variants: {
                outline: {
                    _hover: {
                        color: ({ colors }) => colors.white,
                    },
                },
            },
            defaultProps: {
                colorScheme: 'primary',
            },
        },
        Container: {
            baseStyle: {
                maxWidth: 'container.lg',
            },
        },
    },
} as const;


export default extendTheme(config);

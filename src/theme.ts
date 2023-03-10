import { extendTheme, type ThemeConfig, type ThemeOverride } from '@chakra-ui/react';


const config: ThemeOverride & ThemeConfig = {
    config: {
        initialColorMode: 'system',
        useSystemColorMode: false,
    },
    colors: {
        primary: {
            50: 'hsl(60, 10%, 80%)',
            100: 'hsl(60, 10%, 75%)',
            200: 'hsl(60, 10%, 70%)',
            300: 'hsl(60, 10%, 65%)',
            400: 'hsl(60, 10%, 60%)',
            500: 'hsl(60, 10%, 55%)',
            600: 'hsl(60, 10%, 50%)',
            700: 'hsl(60, 10%, 40%)',
            800: 'hsl(60, 10%, 30%)',
            900: 'hsl(60, 10%, 20%)',
            text: 'hsl(60, 10%, 5%)',
            textLight: 'hsl(60, 10%, 90%)',
        },
    },
    styles: {
        global: {
            'h1': { fontSize: '3xl', mb: 2, fontWeight: 'bold', lineHeight: 0.9 },
            'h2': { fontSize: '2xl', mb: 2, fontWeight: 'bold', lineHeight: 0.9 },
            'h3': { fontSize: '1xl', mb: 2, lineHeight: 0.9 },
            'h4': { fontSize: 'xl', mb: 2 },
            'h5': { fontSize: 'lg', mb: 2 },
            'h6': { fontSize: 'md', mb: 2 },
            'p': { overflowWrap: 'break-word', pb: 6, lineHeight: 1.5 },
        },
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
                        color: ({ colors }) => colors.primary.textLight,
                    },
                },
            },
            defaultProps: {
                colorScheme: 'primary',
            },
        },
        Container: { baseStyle: { maxWidth: 'container.lg' } },
    },
} as const;


export default extendTheme(config);

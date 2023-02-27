import { extendTheme, ThemeOverride  } from '@chakra-ui/react';


const config: ThemeOverride = {
    colors: {
        primary: {
            50: 'hsl(60, 10%, 24%)',
            100: 'hsl(60, 10%, 28%)',
            200: 'hsl(60, 10%, 32%)',
            300: 'hsl(60, 10%, 36%)',
            400: 'hsl(60, 10%, 40%)',
            500: 'hsl(60, 10%, 44%)',
            600: 'hsl(60, 10%, 50%)',
            700: 'hsl(60, 10%, 54%)',
            800: 'hsl(60, 10%, 58%)',
            900: 'hsl(60, 10%, 62%)',
            text: 'hsl(60, 10%, 5%)',
            textLight: 'hsl(60, 10%, 90%)',
        },
    },
    styles: {
        global: {
            h1: { fontSize: '3xl', mb: 2, fontWeight: 'bold', lineHeight: 0.9 },
            h2: { fontSize: '2xl', mb: 2, fontWeight: 'bold', lineHeight: 0.9 },
            h3: { fontSize: '1xl', mb: 2, lineHeight: 0.9 },
            h4: { fontSize: 'xl', mb: 2 },
            h5: { fontSize: 'lg', mb: 2 },
            h6: { fontSize: 'md', mb: 2 },
            p: { overflowWrap: 'break-word', pb: 6, lineHeight: 1.5, color: '#333' },
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
                lineHeight:0,
            },
            variants: { outline: { _hover:{ color: ({ colors }) => colors.primary['textLight'] } } },
        },
        Container: { baseStyle: { maxWidth: 'container.lg' } },
    },
};


export default extendTheme(config);

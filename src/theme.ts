import { extendTheme } from '@chakra-ui/react';


export default extendTheme({
    colors: {
        primary: {
            50: 'hsl(36, 42%, 90%)',
            100: 'hsl(36, 42%, 85%)',
            200: 'hsl(36, 42%, 80%)',
            300: 'hsl(36, 42%, 70%)',
            400: 'hsl(36, 42%, 60%)',
            500: 'hsl(36, 42%, 55%)',
            600: 'hsl(36, 42%, 51%)',
            700: 'hsl(36, 42%, 40%)',
            800: 'hsl(36, 42%, 30%)',
            900: 'hsl(36, 42%, 20%)',
            text: 'black',
            textLight: 'white',
        },
        secondary: { 600: 'green' },
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
    custom: { headerHeight: '64px' },
    components: {
        Button: { baseStyle: { cursor: 'pointer' } },
        Container: { baseStyle: { maxWidth: 'container.lg' } },
    },
});

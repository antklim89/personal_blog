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
            h1: { fontSize: '3xl' },
            h2: { fontSize: '2xl' },
            h3: { fontSize: '1xl' },
            h4: { fontSize: 'xl' },
            h5: { fontSize: 'lg' },
            h6: { fontSize: 'md' },
            p: { overflowWrap: 'break-word' },
        },
    },
    custom: { headerHeight: '64px' },
});

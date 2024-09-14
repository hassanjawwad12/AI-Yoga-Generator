import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'Poppins, sans-serif', // main page headings
        text: 'Inter, sans-serif',
    },
    fontWeights: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700, //  main page 700

    },
    fontSizes: {
        14: '14px',
        16: '16px',
        17: '17px',
        20: '20px',
        24: '24px',
        32: '32px',
        36: '36px',
        48: '48px',
        56: '56px',
        64: '64px', // main page heading
    },
    lineHeights: {
        customHeading: '85.76px', // main page heading
    },
    colors: {
        brand: {
            100: "#FFFFFF",  //background color and text
            200: "#1865f2",  //rounded buttons and footer bg color
            300: "#FFFFFF",  //rounded buttons text color
            400: "#000000",   //heading text color and for nav text
            500: "#000000",   //simple text color
            600: "#f2f2f2",   //faqs, features,pricing plan, loading bar bg-color
            700: "#f2f2f2",   //input fields bg-color
            800: "#9F926E",   //dont have account, already account
            900: "#535353",   //signin signup   
            1000: "#195bff",
            1100: "#D6D6D6",  //border color
            1200: "#000000",
            main: '#FFFFFF',
            secondary: '#000000',
            hover_secondary: '#F07B3FDD', //for hover state
            light: '#FFFFFF', // replacement for white
            progress_back: '#FFDB7A',
            progress_border: '#DDC071',
            body: '#000000', // for text
            input: '#FFF'
        },
    },


});

export default theme;

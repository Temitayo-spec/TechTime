import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.cdnfonts.com/css/midnight-signature');
    @import url('https://fonts.cdnfonts.com/css/satoshi');
    @import url('https://fonts.cdnfonts.com/css/clash-display');
                
    :root {
        --primary-font: 'Satoshi', sans-serif;
        --secondary-font: 'Midnight Signature', sans-serif;
        --tertiary-font: 'Clash Display', sans-serif;

        --color-white: #fff;
        --color-blue: #004DB3;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        min-height: 100vh;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

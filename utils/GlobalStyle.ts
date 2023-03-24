import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-font: 'Satoshi', sans-serif;
        --secondary-font: 'Midnight Signature', sans-serif;
        --tertiary-font: 'Clash Display', sans-serif;

        --color-white: #fff;
        --color-blue: #004DB3;
        --color-light-blue: #aac4e6;
        --color-whitesmoke: #e7e7e7;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

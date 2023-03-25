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
        --company-bg: #CCDBF0;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    .parallax {
        display: flex;
        align-items: center;
    }

    .parallax .scroller {
        display: flex;
        gap: 2em;
    }

    .parallax span {
        display: inline-flex;
        align-items: center;
        gap: 2em;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: var(--color-whitesmoke);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--color-blue);
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--color-light-blue);
    }

    ul {
        list-style: none;
    }
`;

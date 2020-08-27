import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: ${({theme}) => theme.colors.blueGreen};
        color: ${({theme}) => theme.colors.white};
    }

    h1, h2 {
        text-align: center;
    }
    h3 {
        margin: 20px 0;
    }
`

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: ${({theme}) => theme.colors.blueGreen};
        color: ${({theme}) => theme.colors.white};
    }
`

export default GlobalStyle;

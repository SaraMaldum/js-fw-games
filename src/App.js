import React from 'react';
import NavBar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import './App.css';
import theme from './styles/theme';

const Wrapper = styled.div`
  &.wrapper {
    flex: 1 0 auto;
}
`

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper className="wrapper">
          <GlobalStyles />
          <NavBar />
        </Wrapper>
        <Footer>&copy; Sara Maldum</Footer>
      </ThemeProvider>
    </>
  );
}

export default App;

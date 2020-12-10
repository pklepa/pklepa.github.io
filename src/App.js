import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Routes from "./Routes";

const theme = {
  font: "Dosis",
  primary: "#222",
  secondary: "#999",
  highlight: "#f8efd4",
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.secondary};
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    font-size: 18px;  
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #666;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #666;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000000;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />

      <BrowserRouter>
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

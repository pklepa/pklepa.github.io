import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

const theme = {
  font: "Dosis",
  primary: "#333",
  secondary: "#999",
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.secondary};
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    font-size: 18px;  
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Container>
        <h1>In construction.</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;

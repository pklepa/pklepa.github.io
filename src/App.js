import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import { Github, LinkedinSquare } from "styled-icons/boxicons-logos";
import { Mail } from "styled-icons/ionicons-solid";
import { Construction } from "styled-icons/material-rounded";

const theme = {
  font: "Dosis",
  primary: "#333",
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary};

  span {
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 20px;
  }
`;

const GithubIcon = styled(Github)``;
const LinkedinIcon = styled(LinkedinSquare)``;
const MailIcon = styled(Mail)``;

const IconsContainer = styled.div`
  display: flex;

  a {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    width: 45px;
    color: ${(props) => props.theme.secondary};
    transition: 400ms;

    &:hover {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Container>
        <span>
          Oops, it seems like you got here a little early. <br />
          You can still reach me through one of these:
        </span>

        <IconsContainer>
          <a target="_blank" href="https://github.com/pklepa">
            <GithubIcon />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/pedro-klepa/">
            <LinkedinIcon />
          </a>
          <a target="_blank" href="mailto:name@email.com">
            <MailIcon />
          </a>
        </IconsContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import React, { useRef, useEffect } from "react";
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
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
    ${"" /* cursor: none !important; */}
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

// const Cursor = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   transform: translate3d(0, 0, 0);
//   pointer-events: none;
//   overflow: hidden;

//   width: 15px;
//   height: 15px;
//   border: 3px solid ${(props) => props.theme.highlight};
//   border-radius: 50%;

//   z-index: 1000;
// `;

function App() {
  // const cursorRef = useRef(null);

  // function onMouseMove(e) {
  //   const { clientX, clientY } = e;
  //   const mouseX = clientX - cursorRef.current.clientWidth / 2;
  //   const mouseY = clientY - cursorRef.current.clientHeight / 2;

  //   cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // }

  // useEffect(() => {
  //   document.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />

      <BrowserRouter>
        <Container>
          {/* <Cursor ref={cursorRef} /> */}
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

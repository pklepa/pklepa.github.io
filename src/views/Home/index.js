import React from "react";

import { Container, Logo } from "./styles";

import { pageTransition } from "../../utils/Animations";

function Home() {
  return (
    <Container exit="out" animate="in" initial="out" variants={pageTransition}>
      <Logo>pedro klepa</Logo>
      <h2>
        Front-end JavaScript Developer || <a href="/temp">Go 2 temp</a>
      </h2>
    </Container>
  );
}

export default Home;

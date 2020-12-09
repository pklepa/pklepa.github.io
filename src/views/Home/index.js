import React from "react";
import { Link } from "react-router-dom";

import { Container, Logo } from "./styles";

import { pageTransition } from "../../utils/Animations";

function Home() {
  return (
    <Container exit="out" animate="in" initial="out" variants={pageTransition}>
      <Logo>pedro klepa</Logo>
      <h2>
        Front-end JavaScript Developer || <Link to="/temp">Go 2 temp</Link>
      </h2>
    </Container>
  );
}

export default Home;

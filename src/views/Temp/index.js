import React from "react";
import { Link } from "react-router-dom";

import { Container, IconsContainer } from "./styles";
import { GithubIcon, LinkedinIcon, MailIcon } from "../../components/Icons";

import { pageTransition } from "../../utils/Animations";

function Temp() {
  return (
    <Container exit="out" animate="in" initial="out" variants={pageTransition}>
      <span>
        <Link to="/">Go back Home</Link> <br />
        Oops, it seems like you got here a little early. <br />
        You can still reach me through one of these:
      </span>

      <IconsContainer>
        <a target="_blank" rel="noreferrer" href="https://github.com/pklepa">
          <GithubIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/pedro-klepa/"
        >
          <LinkedinIcon />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:pedro.klepa@gmail.com">
          <MailIcon />
        </a>
      </IconsContainer>
    </Container>
  );
}

export default Temp;

import React from "react";

import { Container, IconsContainer } from "./styles";
import { GithubIcon, LinkedinIcon, MailIcon } from "../../components/Icons";

function Temp() {
  return (
    <Container>
      <span>
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

import React from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Logo, IconsContainer } from "./styles";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  InstagramIcon,
} from "../../components/Icons";

import { pageTransition } from "../../utils/Animations";

function Contact() {
  return (
    <Container exit="out" animate="in" initial="out" variants={pageTransition}>
      <div className="top">
        <Navbar>
          <Logo>
            <h1>pk</h1>
          </Logo>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </Navbar>
      </div>

      <div className="middle">
        <p>
          Hey, I just met you and this is crazy! <br />
          Here's my e-mail:
        </p>

        <a
          class="e-mail"
          // target="_blank"
          // rel="noreferrer"
          href="mailto:pedro.klepa+dev@gmail.com?subject=Hello%20from%20your%20website"
        >
          <strong>pedro.klepa+dev@gmail.com</strong>
        </a>

        <p>Write me maybe.</p>
      </div>

      <div className="bottom">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/pklepa"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:pedro.klepa@gmail.com"
          >
            <MailIcon />
          </a>
        </IconsContainer>
      </div>
    </Container>
  );
}

export default Contact;

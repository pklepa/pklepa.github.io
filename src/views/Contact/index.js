import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <Container>
      <div className="top"></div>

      <motion.div
        className="middle"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
      >
        <p>
          Hey, I just met you and this is crazy! <br />
          Here's my e-mail:
        </p>

        <a
          className="e-mail"
          // target="_blank"
          // rel="noreferrer"
          href="mailto:pedro.klepa+dev@gmail.com?subject=Hello%20from%20your%20website"
        >
          <strong>pedro.klepa+dev@gmail.com</strong>
        </a>

        <p>Write me maybe.</p>
      </motion.div>

      <motion.div
        className="bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
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
      </motion.div>
    </Container>
  );
}

export default Contact;

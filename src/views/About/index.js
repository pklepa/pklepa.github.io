import React from "react";
import { motion } from "framer-motion";

import { Container, IconsContainer } from "./styles";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  InstagramIcon,
} from "../../components/Icons";

import Img from "../../assets/images/pk_draw.jpeg";
import { pageTransition } from "../../utils/Animations";

function About() {
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
        <div className="bio">
          <h1>Who's this guy?</h1>
          <p>
            I'm a Brazilian / Italian aspiring front-end developer based in
            Liverpool, UK. Bachelor of Science in Electrical Engineering, I have
            for long enjoyed coding and design. After working the last two years
            in the television industry as a project architect, I decided to
            fully commit into web development going forwards in 2021.
          </p>
        </div>

        <img src={Img} alt="Profile" />
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

export default About;
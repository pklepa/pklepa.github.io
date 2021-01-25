import React from "react";
import { motion } from "framer-motion";

import { Container, ProfilePic, IconsContainer } from "./styles";
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
            Deeply invested in the life-long learning mentality, I'm a
            full-stack developer who carries a keen eye for design in an
            user-first approach. My focus is in creating responsive layouts on
            the JavaScript stack of React and NodeJS, and from my background as
            an electrical engineer I'm well acquainted to bringing out solutions
            to complex problems.
            {/* Passionate about learning, I see myself as a communicative and
            upfront person who’s doesn’t refrain from asking questions. Our
            ability to share knowledge and experiences drives me and I’ll always
            be looking for a larger room to be around great people. I’m an
            electrical engineer seeking opportunities to shift into the software
            and web development industry. */}
          </p>
        </div>

        <ProfilePic src={Img} alt="Profile" />
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

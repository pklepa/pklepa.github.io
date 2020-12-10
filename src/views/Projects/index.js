import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Container,
  ControlArrow,
  IconsContainer,
  ProjectContainer,
  ProjectImage,
  ProjectDescription,
  IconsWrapper,
  Button,
} from "./styles";

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  InstagramIcon,
  ReactIcon,
  FirebaseIcon,
  FramerIcon,
  StyledComponentsIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "../../components/Icons";

import { Tag } from "../../components/Tag";
import { pageTransition } from "../../utils/Animations";

function Projects() {
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
        <ControlArrow>
          <ArrowLeftIcon />
        </ControlArrow>

        <AnimatePresence>
          <ProjectContainer>
            <ProjectImage
              src="https://user-images.githubusercontent.com/22618438/101240729-055a0e80-36e9-11eb-893d-3b807437b5e1.png"
              alt="Discord Clone"
            />
            <ProjectDescription>
              <h1>Discount Discord</h1>
              <IconsWrapper>
                <Tag>
                  <ReactIcon />
                  <span>react</span>
                </Tag>
                <Tag>
                  <FirebaseIcon />
                  <span>firebase</span>
                </Tag>
                <Tag>
                  <StyledComponentsIcon />
                  <span>styled-components</span>
                </Tag>
                <Tag>
                  <FramerIcon />
                  <span>framer-motion</span>
                </Tag>
              </IconsWrapper>
              <p>
                A clone of Discord's user interface and some of its features
                such as real-time chat, user authentication (Google account) and
                distinct channel chat rooms.
              </p>

              <div className="buttons-wrapper">
                <Button href="https://github.com/pklepa/discord-clone">
                  View Code
                </Button>
                <Button href="https://pklepa.github.io/discord-clone/" primary>
                  See it Live
                </Button>
              </div>
            </ProjectDescription>
          </ProjectContainer>
        </AnimatePresence>

        <ControlArrow>
          <ArrowRightIcon />
        </ControlArrow>
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

export default Projects;

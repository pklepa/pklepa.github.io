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
        // exit="out"
        // animate="in"
        // initial="out"
        // variants={pageTransition}
      >
        <ProjectContainer
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.5 },
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          initial={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.5 },
          }}
          // transition={{ delay: 1 }}
        >
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
              A clone of Discord's user interface and some of its features such
              as real-time chat, user authentication (Google account) and
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

        <ProjectContainer
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.5 },
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          initial={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.5 },
          }}
        >
          <ProjectImage
            src="https://user-images.githubusercontent.com/22618438/101240380-e8244080-36e6-11eb-87b9-3ca04851c74e.png"
            alt="Planetarium"
          />
          <ProjectDescription>
            <h1>Planetarium</h1>
            <IconsWrapper>
              <Tag>
                <ReactIcon />
                <span>react</span>
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
              Clean design for an e-commerce application with shopping cart
              capabilities. Main focus was practicing and deploying a React
              Router application.
            </p>

            <div className="buttons-wrapper">
              <Button href="https://github.com/pklepa/shopping-cart">
                View Code
              </Button>
              <Button href="https://pklepa.github.io/shopping-cart/" primary>
                See it Live
              </Button>
            </div>
          </ProjectDescription>
        </ProjectContainer>
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

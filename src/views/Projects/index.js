import React from "react";
import { motion } from "framer-motion";

import {
  Container,
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
} from "../../components/Icons";

import { Tag } from "../../components/Tag";
import { pageTransition, delayedPageTransition } from "../../utils/Animations";

import { projects_data } from "../../assets/projects_data/projects_data";

function Projects() {
  let isFirst = true;

  return (
    <Container>
      <div className="top"></div>

      <motion.div className="middle">
        {projects_data.map((project) => {
          return (
            <ProjectContainer
              exit="out"
              animate="in"
              initial="out"
              variants={isFirst ? pageTransition : delayedPageTransition}
            >
              {(isFirst = !isFirst)}
              <ProjectImage src={project.photoUrl} alt="Project preview" />
              <ProjectDescription>
                <h1>{project.title}</h1>
                <IconsWrapper>
                  {project.tools.react && (
                    <Tag>
                      <ReactIcon />
                      <span>react</span>
                    </Tag>
                  )}

                  {project.tools.firebase && (
                    <Tag>
                      <FirebaseIcon />
                      <span>firebase</span>
                    </Tag>
                  )}

                  {project.tools.styledComponents && (
                    <Tag>
                      <StyledComponentsIcon />
                      <span>styled-components</span>
                    </Tag>
                  )}

                  {project.tools.framer && (
                    <Tag>
                      <FramerIcon />
                      <span>framer-motion</span>
                    </Tag>
                  )}
                </IconsWrapper>
                <p>{project.description}</p>

                <div className="buttons-wrapper">
                  <Button href={project.githubUrl}>View Code</Button>
                  <Button href={project.liveDemoUrl} primary>
                    See it Live
                  </Button>
                </div>
              </ProjectDescription>
            </ProjectContainer>
          );
        })}
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

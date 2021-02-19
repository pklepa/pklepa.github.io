import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Container,
  IconsContainer,
  ProjectContainer,
  ProjectImage,
  ProjectDescription,
  IconsWrapper,
  Button,
  FloatingButton,
} from "./styles";

import {
  ArrowUpIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  SkillIcons,
} from "../../components/Icons";

import { Tag } from "../../components/Tag";
import { pageTransition, delayedPageTransition } from "../../utils/Animations";

import { projects_data } from "../../assets/data/projects_data";

function Projects() {
  let isFirst = 1;

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowFloatingBtn, setShouldShowFloatingBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos === 0 ? false : yPos < lastYPos;

      setShouldShowFloatingBtn(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <Container>
      <div className="top"></div>

      <motion.div className="middle">
        {projects_data.map((project, index) => {
          return (
            <ProjectContainer
              key={`project-${index}`}
              exit="out"
              animate="in"
              initial="out"
              variants={
                isFirst++ === 1 ? pageTransition : delayedPageTransition
              }
            >
              {(isFirst = !isFirst)}
              <ProjectImage src={project.photoUrl} alt="Project preview" />
              <ProjectDescription>
                <h1>{project.title}</h1>

                <IconsWrapper>
                  {project.tools.map((tool) => {
                    return (
                      <Tag key={tool}>
                        {SkillIcons[tool]
                          ? SkillIcons[tool].render()
                          : SkillIcons.npm.render()}
                        <span>{tool}</span>
                      </Tag>
                    );
                  })}
                </IconsWrapper>

                <p>{project.description}</p>

                <div className="buttons-wrapper">
                  <Button
                    target="_blank"
                    rel="noreferrer"
                    href={project.githubUrl}
                  >
                    View Code
                  </Button>
                  <Button
                    target="_blank"
                    rel="noreferrer"
                    href={project.liveDemoUrl}
                    primary
                  >
                    See it Live
                  </Button>
                </div>
              </ProjectDescription>
            </ProjectContainer>
          );
        })}

        <FloatingButton
          animate={{ opacity: shouldShowFloatingBtn ? 1 : 0 }}
          initial={{ opacity: 0 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setShouldShowFloatingBtn(false);
          }}
        >
          <ArrowUpIcon />
        </FloatingButton>
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

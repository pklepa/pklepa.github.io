import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "./Icons";

function Footer({ props }) {
  return (
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
        <a target="_blank" rel="noreferrer" href="https://instagram.com/pklepa">
          <InstagramIcon />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:pedro.klepa@gmail.com">
          <MailIcon />
        </a>
      </IconsContainer>
    </motion.div>
  );
}

export default Footer;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    width: 32px;
    color: ${(props) => props.theme.secondary};
    transition: 400ms;

    &:hover {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

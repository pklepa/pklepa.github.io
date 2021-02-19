import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { SocialIcons } from "./Icons";

function Footer() {
  const socialLinks = {
    github: "https://github.com/pklepa",
    linkedin: "https://www.linkedin.com/in/pedro-klepa/",
    instagram: "https://instagram.com/pklepa",
    email: "mailto:pedro.klepa@gmail.com",
  };

  return (
    <motion.div
      className="bottom"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <IconsContainer>
        {Object.entries(socialLinks).map(([key, value]) => {
          return (
            <a target="_blank" rel="noreferrer" href={value}>
              {SocialIcons[key]?.render()}
            </a>
          );
        })}
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

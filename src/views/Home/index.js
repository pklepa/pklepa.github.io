import React from "react";
import { Link } from "react-router-dom";

import { Container, Logo } from "./styles";

import { pageTransition } from "../../utils/Animations";

import { motion } from "framer-motion";

function Home() {
  return (
    <Container>
      <motion.div
        className="top"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        exit={{ y: -80 }}
        transition={{ duration: 1, delay: -0.5 }}
      ></motion.div>

      <motion.div
        className="middle"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
      >
        <Logo>
          <h1>pedro klepa</h1>
        </Logo>
        <h2>Fullstack JavaScript Developer</h2>
      </motion.div>

      <motion.div
        className="bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </motion.div>
    </Container>
  );
}

export default Home;

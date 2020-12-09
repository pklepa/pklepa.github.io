import React from "react";
import { Link } from "react-router-dom";

import { Container, Logo } from "./styles";

import { pageTransition } from "../../utils/Animations";

import { motion } from "framer-motion";

function Home() {
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
        <Logo>pedro klepa</Logo>
        <h2>Front-end JavaScript Developer</h2>
      </motion.div>

      <motion.div
        className="bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
      >
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
        <Link to="temp">Temp</Link>
      </motion.div>
    </Container>
  );
}

export default Home;

import React from "react";
import { motion } from "framer-motion";

import { Container, ProfilePic } from "./styles";

import Img from "../../assets/images/pk_draw.jpeg";
import { pageTransition } from "../../utils/Animations";
import Footer from "../../components/Footer";

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
          </p>
        </div>

        <ProfilePic src={Img} alt="Profile" />
      </motion.div>

      <Footer />
    </Container>
  );
}

export default About;

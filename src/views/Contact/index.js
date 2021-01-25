import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { Container, Form, IconsContainer } from "./styles";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  InstagramIcon,
} from "../../components/Icons";

import { pageTransition } from "../../utils/Animations";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_16ne1v5",
        "template_web6r4l",
        e.target,
        "user_IMVYx4gtdeZMCQzjSTX3i"
      )
      .then(
        (result) => {
          alert(
            "Thank you! Your message was sent and will be replied shortly."
          );
          console.log(result.text);

          e.target.reset();
        },
        (error) => {
          alert(
            "Unfortunately there was an unexpected error. Please try again later or write directly to the provided email on the site footer."
          );
          console.log(error.text);
        }
      );
  }

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
        <Form onSubmit={sendEmail}>
          <h1>Say hello!</h1>
          <p>I'll write you back as soon as possible</p>

          <div className="input-wrapper">
            <input
              type="input"
              className="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              Name
            </label>
          </div>

          <div className="input-wrapper">
            <input
              type="input"
              className="form__field"
              placeholder="E-mail"
              name="email"
              id="email"
              required
            />
            <label htmlFor="email" className="form__label">
              E-mail
            </label>
          </div>

          <div className="input-wrapper">
            <textarea
              className="form__field"
              placeholder="Type here your message"
              name="message"
              id="message"
              rows="1"
              required
            />
            <label htmlFor="message" className="form__label">
              Message
            </label>
          </div>

          <button type="submit">Send</button>
        </Form>
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

export default Contact;

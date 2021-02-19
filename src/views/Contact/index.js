import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { Container, Form } from "./styles";

import { pageTransition } from "../../utils/Animations";
import Footer from "../../components/Footer";

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

      <Footer />
    </Container>
  );
}

export default Contact;

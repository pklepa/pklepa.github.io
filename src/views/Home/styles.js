import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 100vh;
  overflow-y: hidden;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80px;
  }

  .middle {
    flex: 1;
    flex-direction: column;

    h2 {
      margin-top: 16px;

      a {
        color: ${(props) => props.theme.highlight};
      }
    }
  }

  .bottom {
    a {
      color: ${(props) => props.theme.secondary};
      /* font-family: "Big Shoulders Stencil Display", cursive; */
      font-size: 20px;
      text-decoration: none;
      transition: 0.4s;

      &:not(:first-child) {
        margin-left: 16px;
      }

      &:hover {
        color: ${(props) => props.theme.highlight};
      }
    }
  }
`;

export const Logo = styled.h1`
  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 50px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  padding: 10px 10px 14px;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 3px;

  transition: 1s;
  cursor: default;

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }
`;

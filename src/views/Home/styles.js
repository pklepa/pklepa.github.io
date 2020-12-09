import styled, { keyframes } from "styled-components";
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

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

export const Logo = styled.div`
  position: relative;

  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 50px;
  border-radius: 3px;
  z-index: 10;

  cursor: default;

  h1 {
    color: ${(props) => props.theme.highlight};
    color: #f8efd5;
    background-color: ${(props) => props.theme.primary};
    border-radius: 3px;
    padding: 10px 10px 14px;
  }

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    z-index: -1;
    width: calc(100% + 3px * 2);
    height: calc(100% + 3px * 2);
    background: linear-gradient(90deg, #222, #f8efd4, #222);
    background-size: 200% 200%;
    background-position: 0 -50%;
    border-radius: calc(2 * 3px);
    animation: ${moveGradient} 8s ease-in-out infinite;
  }
`;

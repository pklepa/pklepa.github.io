import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;

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
  }

  .bottom {
    position: relative;
    border-top: 2px solid #333;

    &::after {
      position: absolute;
      top: -14px;

      content: "get social";
      background-color: ${(props) => props.theme.primary};
      padding: 4px 6px;
      color: ${(props) => props.theme.secondary};
      font-size: 14px;
    }
  }

  p {
    text-align: center;
    line-height: 1.5em;
  }

  .e-mail {
    color: ${(props) => props.theme.highlight};
    font-size: 18px;
    font-family: monospace;
    text-decoration: none;
    background-color: #333;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.highlight};
    padding: 8px 12px;
    margin: 12px;
  }

  span {
    opacity: 0.5;
    margin: 20px 0;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 10px 40px;

  ul {
    a {
      color: ${(props) => props.theme.secondary};
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
  font-size: 24px;
  border-radius: 3px;
  z-index: 10;

  cursor: default;

  h1 {
    color: ${(props) => props.theme.highlight};
    color: #f8efd5;
    background-color: ${(props) => props.theme.primary};
    border-radius: 3px;
    padding: 4px 8px 8px;
  }

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    z-index: -1;
    width: calc(100% + 2px * 2);
    height: calc(100% + 2px * 2);
    background: linear-gradient(90deg, #222, #f8efd4, #222);
    background-size: 200% 200%;
    background-position: 0 -50%;
    border-radius: calc(2 * 2px);
    animation: ${moveGradient} 8s ease-in-out infinite;
  }
`;

export const IconsContainer = styled.div`
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
    width: 40px;
    color: ${(props) => props.theme.secondary};
    transition: 400ms;

    &:hover {
      color: ${(props) => props.theme.highlight};
    }
  }
`;
